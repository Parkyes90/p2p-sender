import React, { useEffect } from "react";
import { useParams } from "react-router";
import useWebSocket from "react-use-websocket";
import { useWebsocketProtocol } from "../../../hooks/use-websocket-protocol";

interface DownloadChannelDetailPageParams extends Record<string, string> {
  downloadId: string;
}

function DownloadChannelDetailPage() {
  const { downloadId } = useParams<DownloadChannelDetailPageParams>();
  const websocketProtocol = useWebsocketProtocol();
  const { lastMessage, readyState, sendMessage } = useWebSocket(
    `${websocketProtocol}://${window.location.host}/ws/download-channels/${downloadId}/`
  );
  useEffect(() => {
    const myPeerConnection = new RTCPeerConnection({
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
    myPeerConnection.addEventListener("icecandidate", (data) => {
      console.log("Got Ice Candidate", data);
    });
  }, [sendMessage, lastMessage, readyState]);
  return <div>DownloadChannelDetailPage {downloadId}</div>;
}

export default DownloadChannelDetailPage;
