import React from "react";
import Card from "../common/card/card";
import "./_table.scss";

const Table = ({ children, ...rest }) => {
  return (
    <div className="table-container">
      <Card>
        <table {...rest}>{children}</table>
      </Card>

      <div className="table-selection-details">
        <div className="current-count">
          Showing{" "}
          <span>
            <button>10</button>
          </span>{" "}
          out of 100
        </div>
        <div className="pageination-container">Pageination</div>
      </div>
    </div>
  );
};

export default Table;
