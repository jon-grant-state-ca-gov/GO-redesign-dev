window.addEventListener("load", () => {
  const searchSVG = document.querySelector("header .search-svg");
  const searchInput = document.querySelector("header #search-box");

  if (!searchInput) return;

  searchSVG.addEventListener("click", () => {
    searchInput.classList.toggle("focus-search-box");
  });
});
