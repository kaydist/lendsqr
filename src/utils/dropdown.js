export const openDropdown = (selector, idx) => {
  setTimeout(() => {
    const dropdown = document.querySelector(`${selector}`);

    if (!dropdown.classList.contains("open")) {
      dropdown.classList.add("open");
    } else {
      dropdown.classList.remove("open");
    }
  }, 50);
};
