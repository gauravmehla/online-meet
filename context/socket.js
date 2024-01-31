import { createContext, useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io();
    setSocket(connection);
  }, []);

  socket?.on("connect_error", async (err) => {
    await fetch("/api/socket");
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
