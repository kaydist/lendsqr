const TableHeading = ({ headings, cellClass, ...rest }) => {
  return (
    <thead {...rest}>
      <tr>
        {headings.map((title, idx) => {
          return (
            <th key={idx} className={`table-heading ${cellClass}`}>
              {title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

const TableBody = ({ children, className, ...rest }) => {
  return (
    <tbody className={`table-field ${className ? className : ""} `} {...rest}>
      {children}
    </tbody>
  );
};

const TableRow = ({ children, className, padding, ...rest }) => {
  return (
    <tr className={`${className ? className : ""}`} {...rest}>
      {children}
    </tr>
  );
};

export { TableBody, TableHeading, TableRow };
