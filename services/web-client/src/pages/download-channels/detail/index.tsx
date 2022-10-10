import React from "react";
import { useParams } from "react-router";
import useWebSocket from "react-use-websocket";
import { useWebsocketProtocol } from "../../../hooks/use-websocket-protocol";
import usePeerConnection from "../../../hooks/use-peer-connection";

interface DownloadChannelDetailPageParams extends Record<string, string> {
  downloadId: string;
}

function DownloadChannelDetailPage() {
  const { downloadId } = useParams<DownloadChannelDetailPageParams>();
  const websocketProtocol = useWebsocketProtocol();
  const myPeerConnection = usePeerConnection();
  const { sendMessage } = useWebSocket(
    `${websocketProtocol}://${window.location.host}/ws/download-channels/${downloadId}/`
  );
  const createOffer = async () => {
    const offer = await myPeerConnection?.createOffer();
    await myPeerConnection?.setLocalDescription(offer);
    console.log("send offer");
    sendMessage(
      JSON.stringify({
        type: "offer",
        offer,
        downloadId,
      })
    );
  };

  return (
    <div>
      DownloadChannelDetailPage
      {downloadId}
      <button onClick={createOffer}>Offer</button>
    </div>
  );
}

export default DownloadChannelDetailPage;
