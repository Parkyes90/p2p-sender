import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DownloadChannelDetailPage from "./pages/download-channels/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },
  {
    path: "download-files/:downloadId",
    element: <DownloadChannelDetailPage />,
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
