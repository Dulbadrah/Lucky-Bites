"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import io, { Socket } from "socket.io-client";

let socket: Socket;

export default function  JoinRoom() {
  const roomId = "123"; // Example room ID
  useEffect(() => {
    if (!roomId) return;

    socket = io("http://localhost:4200");

    socket.on("connect", () => {
      if (!socket.id) return;

      socket.emit("joinRoom", {roomCode: roomId, playerName: Math.random().toString(36).substring(7)});

      socket.on('roomData', ({ host, players, option }) => {
        console.log('Room Data:', { host, players, option });
      })
          
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId]);
  return <Button className="bg-black"> test page </Button>;
};


