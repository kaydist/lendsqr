import React from "react";

export default function Input({ label, error, ...rest }) {
  return (
      <input {...rest} />
  );
}
