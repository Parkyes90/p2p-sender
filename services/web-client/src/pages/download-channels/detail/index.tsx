import React from "react";
import { useParams } from "react-router";

interface DownloadChannelDetailPageParams extends Record<string, string> {
  downloadId: string;
}

function DownloadChannelDetailPage() {
  const { downloadId } = useParams<DownloadChannelDetailPageParams>();
  return <div>DownloadChannelDetailPage {downloadId}</div>;
}

export default DownloadChannelDetailPage;
