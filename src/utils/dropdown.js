export const openDropdown = (selector, idx) => {
  const dropdown = document.querySelector(`${selector}`);

  setTimeout(() => {
    if (!dropdown.classList.contains("open")) {
      dropdown.classList.add("open");
    } else {
      dropdown.classList.remove("open");
    }
  }, 50);
};
