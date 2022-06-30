import React from "react";
import Card from "../common/card/card";
import Select from "../common/select/select";
import "./_table.scss";
import { convertToOptions } from "../../utils/form";
import Paginate from "../paginate/paginate";

const Table = ({ children, ...rest }) => {
  return (
    <div className="table-container">
      <Card>
        <table {...rest}>{children}</table>
      </Card>

      <div className="table-selection-details">
        <div className="pageination-container">
          <Paginate pageCount={50} />
        </div>

        <div className="current-count">
          Showing{" "}
          <span>
            <Select
              options={convertToOptions([10, 25, 50])}
              defaultValue={convertToOptions([10])}
            />
          </span>{" "}
          out of 100
        </div>
      </div>
    </div>
  );
};

export default Table;
