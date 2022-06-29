import React from "react";
import './_table.scss'

const Table = ({ children, ...rest }) => {
  return <table {...rest}>{children}</table>;
};

export default Table;
