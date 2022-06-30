import React from "react";
import "./_input.scss";

export default function Input({ label, error, ...rest }) {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}

      <div className="input-field-container">
        <input {...rest} />
      </div>
    </div>
  );
}
