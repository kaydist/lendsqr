import React from "react";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";

const TableHeading = ({ headings, cellClass, ...rest }) => {
  return (
    <thead {...rest}>
      <tr>
        {headings.map((title, idx) => {
          return (
            <th
              key={idx}
              className={`table-heading ${cellClass ? cellClass : ``}`}
            >
              {title}{" "}
              <span className="filter-icon">
                <FilterIcon />
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

const TableBody = ({ children, className, ...rest }) => {
  return (
    <tbody className={`table-body ${className ? className : ""} `} {...rest}>
      {children}
    </tbody>
  );
};

const TableRow = ({ children, className, padding, ...rest }) => {
  return (
    <tr className={`table-row ${className ? className : ""}`} {...rest}>
      {children}
    </tr>
  );
};

export { TableBody, TableHeading, TableRow };
