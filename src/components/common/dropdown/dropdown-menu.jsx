import React, { useLayoutEffect } from "react";
import "./_dropdown.scss";

export default function DropdownMenu({ className, children, ...rest }) {
  useLayoutEffect(() => {
    const popupQuerySelector = ".dropdown-menu";
    const popupEl = document.querySelector(popupQuerySelector);

    document.addEventListener("click", (e) => {
      // Check if the filter list parent element exist
      const isClosest = e.target.closest(popupQuerySelector);

      // If `isClosest` equals falsy & popup has the class `show`
      // then hide the popup
      if (!isClosest && popupEl.classList.contains("open")) {
        popupEl.classList.remove("open");
      }
    });
  }, []);

  return (
    <div className={`dropdown-menu ${className ? className : ``}`} {...rest}>
      {children}
    </div>
  );
}
