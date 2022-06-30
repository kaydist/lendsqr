import React from "react";
import "./_select.scss";
import ReactSelect from "react-select";

export default function Select(props) {
  return (
    <ReactSelect
      className="react-select_container"
      classNamePrefix="react-select"
      options={props.options}
      placeholder={props.placeholder}
      {...props}
    />
  );
}
