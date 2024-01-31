import { useSocket } from "@/context/socket";
import { useEffect } from "react";

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("client is connected");
    });
  });

  return <h1>Howdy</h1>;
}
