import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import ReactPaginate from "react-paginate";
import { openDropdown } from "../../utils/dropdown";

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
              <span
                className="filter-icon"
                onClick={() => {
                  openDropdown(".filter-dropdown");
                }}
              >
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

// function Items({ currentItems }) {
//   const ProductCardContainer = useRef(null);

//   return (
//     <TableBody>
//       {currentItems.map((product, idx) => {
//         return;
//       })}
//     </TableBody>
//   );
// }

// function PaginatedItems({ itemsPerPage, category }) {
//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(category.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(category.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, category]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % category.length;
//     setItemOffset(newOffset);
//     setCurrentPage(Math.round(event.selected));
//   };

//   return (
//     <>
//       <Items currentItems={currentItems} pageCount={currentPage} />

//       <ReactPaginate
//         breakLabel="..."
//         nextLabel=">"
//         onPageChange={(event) => {
//           handlePageClick(event);
//         }}
//         // pageRangeDisplayed={1}
//         pageCount={pageCount}
//         previousLabel="<"
//         renderOnZeroPageCount={null}
//         forcePage={currentPage}
//         activeClassName="active"
//       />
//     </>
//   );
// }

// function ProductContainer({ itemArr }) {
//   return (
//     <>
//       <PaginatedItems category={itemArr} itemsPerPage={12} />
//     </>
//   );
// }

export { TableBody, TableHeading, TableRow };
