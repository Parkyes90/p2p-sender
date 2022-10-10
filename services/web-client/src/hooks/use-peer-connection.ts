import { useEffect, useState } from "react";

const usePeerConnection = () => {
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection>();

  useEffect(() => {
    const peerConnection = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
            "stun:stun3.l.google.com:19302",
            "stun:stun4.l.google.com:19302",
          ],
        },
      ],
    });
    peerConnection.addEventListener("icecandidate", (data) => {
      console.log("Got Ice Candidate", data);
    });
    setPeerConnection(peerConnection);
  }, []);

  return peerConnection;
};

export default usePeerConnection;
