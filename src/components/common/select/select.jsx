import React from "react";
import "./_select.scss";
import ReactSelect from "react-select";

export default function Select(props) {
  return (
    <div className="input-container">
      {props.label && <label className="input-label">{props.label}</label>}

      <div className="input-field-container">
        <ReactSelect
          className="react-select_container"
          classNamePrefix="react-select"
          options={props.options}
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    </div>
  );
}
