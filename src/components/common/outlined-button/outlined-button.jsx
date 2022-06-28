import React from "react";
import "./_outlined-button.scss";

export default function OutlinedButton({ className, children, ...rest }) {
  return (
    <button className={`${className} outlined-btn`} {...rest}>
      {children}
    </button>
  );
}
