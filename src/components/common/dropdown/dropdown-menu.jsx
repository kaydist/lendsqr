import React from "react";
import "./_dropdown.scss";

export default function DropdownMenu({className, children, ...rest }) {
  return (
    <div className={`dropdown-menu ${className ? className : ``}`} {...rest}>
      {children}
    </div>
  );
}
