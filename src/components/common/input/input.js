import React from "react";
import "./_input.scss";

export default function Input({ label, error, ...rest }) {
  return (
      <input {...rest} />
  );
}
