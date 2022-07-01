import React from "react";
import Card from "../common/card/card";
import Select from "../common/select/select";
import "./_table.scss";
import { convertToOptions } from "../../utils/form";
import Paginate from "../paginate/paginate";

const Table = ({ children, tableProps, changeData, ...rest }) => {
  const { setPerPage, setCurrentPage, currentPage, totalCount, perPage } =
    tableProps || {};

  const handlePerPageChange = (val) => {
    if (val) {
      setPerPage(val);
    }
  };
  return (
    <div className="table-container">
      <Card>
        <table {...rest}>{children}</table>
      </Card>

      <div className="table-selection-details">
        <div className="pageination-container">
          <Paginate changeData={changeData} pageCount={Math.ceil(totalCount / perPage)} />
        </div>

        <div className="current-count">
          Showing{" "}
          <span>
            <Select
              options={convertToOptions([10, 25, 50])}
              defaultValue={convertToOptions([10])}
              onChange={(val) => {
                handlePerPageChange(val);
              }}
            />
          </span>{" "}
          out of 100
        </div>
      </div>
    </div>
  );
};

export default Table;
