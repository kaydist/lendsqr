import React from "react";

export default function FillButton({ className, children, ...rest }) {
  return (
    <button className={`${className} btn`} {...rest}>
      {children}
    </button>
  );
}
