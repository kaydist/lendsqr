import React, { useLayoutEffect } from "react";
import "./_dropdown.scss";

export default function DropdownMenu({ className, children, ...rest }) {
  useLayoutEffect(() => {
    // Function to close on click outside of dropdown

    const popupQuerySelector = ".dropdown-menu";
    const popupEl = document.querySelectorAll(popupQuerySelector);

    document.addEventListener("click", (e) => {
      // Check if the filter list parent element exist
      const isClosest = e.target.closest(popupQuerySelector);

      // If `isClosest` equals falsy & popup has the class `show`
      // then hide the popup

      popupEl.forEach((el) => {
        if (!isClosest && el.classList.contains("open")) {
          el.classList.remove("open");
        }
      });
    });
  }, []);

  return (
    <div className={`dropdown-menu ${className ? className : ``}`} {...rest}>
      {children}
    </div>
  );
}
