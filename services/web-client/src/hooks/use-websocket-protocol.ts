import { useEffect, useState } from "react";

export const useWebsocketProtocol = () => {
  const [websocketProtocol, setWebsocketProtocol] = useState("wss");

  useEffect(() => {
    setWebsocketProtocol(
      window.location.protocol.includes("https") ? "wss" : "ws"
    );
  }, []);

  return websocketProtocol;
};
