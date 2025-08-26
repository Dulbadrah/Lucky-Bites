"use client";
import CreateRoomForm from "./component/createRoom";
import JoinRoom from "./component/JoinRoom";
const Page = () => {
  return (
    <div className="min-w-screen ">
      <CreateRoomForm />
      <JoinRoom />
    </div>
  );
};

export default Page;
