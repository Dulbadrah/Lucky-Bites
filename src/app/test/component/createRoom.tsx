"use client";

import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4200"); // backend хаяг

export default function CreateRoomForm() {

  const [roomName, setRoomName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<string[]>([]);
  const [host, setHost] = useState<string | null>(null);

  // create room
  const handleCreateRoom = () => {
    socket.emit("createRoom", { roomName, playerName });
  };

  // join room
  const handleJoinRoom = () => {
    socket.emit("joinRoom", {  playerName });
  };

  // listen for room updates
  socket.on("roomData", (data) => {
    setPlayers(data.players);
    setHost(data.host);
  });

  return (
    <div className="flex flex-col gap-4 p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">🎮 Create / Join Room</h2>

    

      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Your Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={handleCreateRoom}
        className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Create Room
      </button>

      {/* <button
        onClick={handleJoinRoom}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Join Room
      </button> */}

  
    </div>
  );
}
