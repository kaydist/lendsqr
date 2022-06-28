import React from "react";
import Topbar from "./common/topbar";

export default function InAppLayout({ image, children }) {
  return (
    <div>
      <Topbar />
      <div>{children}</div>
    </div>
  );
}
