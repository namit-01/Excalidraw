import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjYjUxN2ZiMC0zZDNiLTQwZTUtOTIxZC03Yzk5MmFlMTZhZDQiLCJpYXQiOjE3NjAzNTE2OTd9.UJbYDOOMmIw031t_YTUgf5oykkd4Rz5R4_ge4EsHmCQ`
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}
