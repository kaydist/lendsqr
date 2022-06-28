import React from "react";
import Sidebar from "./common/sidebar";
import Topbar from "./common/topbar";

export default function InAppLayout({ image, children }) {
  return (
    <div className="in-app-layout">
      <Topbar />
      <Sidebar />

      <div className="main-content">{children}</div>
    </div>
  );
}
