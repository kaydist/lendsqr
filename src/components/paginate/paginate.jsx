import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./_paginate.scss";
import { scrollToTop } from "../../utils/helper";

//icons
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";

export default function Paginate({ pageCount }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (event) => {
    setCurrentPage(Math.round(event.selected));
    scrollToTop();
  };

  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      breakLabel="..."
      onPageChange={(event) => {
        handlePageClick(event);
      }}
      nextLabel={
        <button className="paginate-button next">
          <NextIcon />
        </button>
      }
      pageCount={pageCount}
      previousLabel={
        <button className="paginate-button previous">
          <NextIcon />
        </button>
      }
      renderOnZeroPageCount={null}
      forcePage={currentPage}
      containerClassName="pagination"
      pageClassName="paginate-item"
      activeClassName="active"
    />
  );
}
