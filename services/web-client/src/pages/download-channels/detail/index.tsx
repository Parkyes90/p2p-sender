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
  const { lastMessage, readyState } = useWebSocket(
    `${websocketProtocol}://${window.location.host}/ws/download-channels/${downloadId}/`
  );
  useEffect(() => {
    console.log(lastMessage, readyState);
  }, [lastMessage, readyState]);
  return <div>DownloadChannelDetailPage {downloadId}</div>;
}

export default DownloadChannelDetailPage;
