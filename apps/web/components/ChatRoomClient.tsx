"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
  messages,
  id,
}: {
  messages: { message: string }[];
  id: string;
}) {
  const [chats, setChats] = useState(messages);
  const [currentMessage, setCurrentMessage] = useState("");
  const { socket, loading } = useSocket();

  useEffect(() => {
    if (!socket || loading) return;

    // Join room
    socket.send(
      JSON.stringify({
        type: "join_room",
        roomId: id,
      })
    );

    // Define handler
    const handleMessage = (event: MessageEvent) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData.type === "chat") {
        setChats((c) => [...c, { message: parsedData.message }]);
      }
    };

    // Add listener
    socket.addEventListener("message", handleMessage);

    // Cleanup to prevent duplicates
    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  }, [socket, loading, id]);

  return (
    <div>
      {chats.map((m, index) => (
        <div key={index}>{m.message}</div> // Add key to remove React warning
      ))}

      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />

      <button
        onClick={() => {
          if (!currentMessage.trim()) return;
          socket?.send(
            JSON.stringify({
              type: "chat",
              roomId: id,
              message: currentMessage,
            })
          );
          setCurrentMessage("");
        }}
      >
        Send message
      </button>
    </div>
  );
}
