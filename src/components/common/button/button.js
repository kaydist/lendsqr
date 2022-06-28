import React from "react";
import "./_button.scss";

export default function FillButton({ className, children, ...rest }) {
  return (
    <button className={`${className} btn`} {...rest}>
      {children}
    </button>
  );
}
