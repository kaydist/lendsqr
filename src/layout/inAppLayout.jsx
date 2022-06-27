import React from "react";

export default function InAppLayout({ image, children }) {
  return (
    <div>
      <div>AuthLayout</div>
      <div>{children}</div>
    </div>
  );
}
