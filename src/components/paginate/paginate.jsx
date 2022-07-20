import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import "./_paginate.scss";
import { scrollToTop } from "../../utils/helper";

//icons
import { ReactComponent as NextIcon } from "../../assets/icons/next.svg";

export default function Paginate({ pageCount, changeData, perPage }) {
  const [currentPage, setCurrentPage] = useState(0);

  const indexedDb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB;

  var db = null;

  var request = indexedDb.open("usersDB", 1);
  request.onerror = function (event) {
    console.log("Error opening database");
  };
  request.onsuccess = function (event) {
    db = event.target.result;
  };

  var counter = 0;
  var limit = perPage;

  const handlePageClick = (event) => {
    // setCurrentPage(event.selected);
    setCurrentPage(Math.ceil(event.selected));
    nextPage(event.selected);
  };

  const nextPage = (pageNo) => {
    var advanced = false;
    var nextPageArr = [];
    db
      .transaction("usersDB", "readwrite")
      .objectStore("usersDB")
      .openCursor().onsuccess = function (event) {
      var cursor = event.target.result;

      if (!cursor) {
        return;
      }

      if (!advanced) {
        advanced = true;
        console.log(pageNo);
        if (pageNo > 0) {
          cursor.advance(pageNo * limit);
        }
        return;
      }

      if (cursor) {
        var value = cursor.value;
        console.log(value);
        nextPageArr.push(value);

        counter++;
        if (counter < limit) {
          cursor.continue();
        } else {
          changeData(nextPageArr);
        }
      }
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
