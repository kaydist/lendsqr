import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./_paginate.scss";
import { scrollToTop } from "../../utils/helper";

//icons
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";

export default function Paginate({ pageCount }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexedDb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB;

  var db = null;
  var request = indexedDb.open("users", 1);
  request.onerror = function (event) {
    console.log("Error opening database");
  };
  request.onsuccess = function (event) {
    db = event.target.result;
  };
  var counter = 0;
  var limit = 10;

  const handlePageClick = (event) => {
    setCurrentPage(Math.round(event.selected));
    scrollToTop();
    nextPage(Math.round(event.selected));
  };

  const nextPage = (pageNo) => {
    var advanced = false;
    db
      .transaction("users", "readwrite")
      .objectStore("users")
      .openCursor().onsuccess = function (event) {
      var cursor = event.target.result;

      if (!cursor) {
        return;
      }

      if (!advanced) {
        advanced = true;
        cursor.advance((pageNo + 1) * limit);
        return;
      }

      // var value = cursor.value;

      if (cursor) {
        var value = cursor.value;

        console.log(value);
        counter++;
        if (counter < limit) {
          cursor.continue();
        }
      }

      // ...
    };
  };

  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      breakLabel="..."
      onPageChange={(event) => {
        handlePageClick(event);
      }}
      nextLabel={
        <button
          className="paginate-button next"
          onClick={() => {
            nextPage();
          }}
        >
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
