import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DownloadChannelDetailPage from "./pages/download-channels/detail";
import DownloadChannelIndexPage from "./pages/download-channels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },
  {
    path: "download-files/:downloadId",
    element: <DownloadChannelDetailPage />,
  },
  {
    path: "download-files",
    element: <DownloadChannelIndexPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
