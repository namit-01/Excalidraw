import express from "express";
import cors from "cors";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {
  CreateRoomSchema,
  CreateUserSchema,
  SiginSchema,
} from "@repo/common/types";
import { prisma } from "@repo/db/index";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Signup route
app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log(parsedData.error);
    res.json({ message: "Incorrect inputs" });
    return;
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: parsedData.data.username,
        password: parsedData.data.password,
        name: parsedData.data.name,
      },
    });
    res.json({ userId: user.id });
  } catch (e) {
    res.status(411).json({ message: "User already exists with this username" });
  }
});

// Signin route
app.post("/signin", async (req, res) => {
  const parsedData = SiginSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({ message: "Incorrect inputs" });
    return;
  }

  const user = await prisma.user.findFirst({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });

  if (!user) {
    res.status(403).json({ message: "Not authorized" });
    return;
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token });
});

// Room creation route
app.post("/room", middleware, async (req, res) => {
  const parsedData = CreateRoomSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({ message: "Incorrect inputs" });
    return;
  }

  // @ts-ignore
  const userId = req.userId;

  try {
    const room = await prisma.room.create({
      data: {
        slug: parsedData.data.name,
        adminId: userId,
      },
    });

    res.json({ roomId: room.id });
  } catch (e) {
    res.status(411).json({ message: "Room already exists with this name" });
  }
});

// Get chats
app.get("/chats/:roomId", async (req, res) => {
  try {
    const roomId = Number(req.params.roomId);
    const messages = await prisma.chat.findMany({
      where: { roomId },
      orderBy: { id: "desc" },
      take: 1000,
    });

    res.json({ messages });
  } catch (e) {
    console.log(e);
    res.json({ messages: [] });
  }
});

// Get room by slug
app.get("/room/:slug", async (req, res) => {
  const slug = req.params.slug;
  const room = await prisma.room.findFirst({ where: { slug } });
  res.json({ room });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
