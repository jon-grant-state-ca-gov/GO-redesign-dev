window.addEventListener("load", () => {
  const searchSVG = document.querySelector("header .search-svg");
  const searchInput = document.querySelector("header #search-box");
  const resetInputButton = document.querySelector(".ca-gov-close-icon-small");
  const submitInputButton = document.querySelector(".search-submit-icon");
  const submitButton = document.querySelector("#search-submit");

  // Set appropriate icon if search input has a search term
  const updateSearchBox = () => {
    if (searchInput.value === "") {
      submitInputButton.classList.remove("search-submit-icon");
      submitInputButton.classList.add("search-svg-small-icon");
    } else {
      submitInputButton.classList.remove("search-svg-small-icon");
      submitInputButton.classList.add("search-submit-icon");
    }
  };

  if (!searchInput) return;

  // Always keep placeholder text for mobile
  if (window.innerWidth < 1080) {
    searchInput.placeholder = "Search";
  }

  updateSearchBox();

  // Fire update on search box expansion
  searchSVG.addEventListener("click", () => {
    updateSearchBox();
  });

  // Fire update on keyup
  document.addEventListener("keyup", () => {
    updateSearchBox();
  });

  // Close search box on pressing ESC
  document.addEventListener("keyup", e => {
    if (window.innerWidth > 1080 && e.key === "Escape") {
      e.stopPropagation();
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
    // Submit search on pressing Enter
    if (e.key === "Enter") {
      submitButton.click();
    }
  });

  // Close search box and remove value on reset click
  resetInputButton.addEventListener("click", e => {
    e.preventDefault();
    if (window.innerWidth > 1080) {
      searchInput.classList.remove("focus-search-box");
      searchInput.placeholder = "";
    }
    searchInput.value = "";
    searchInput.placeholder = "Search";
  });

  // Open search box and set placeholder on magnifying glass icon click
  searchSVG.addEventListener("click", () => {
    searchInput.focus();
    if (window.innerWidth > 1080) {
      if (!searchInput.classList.contains("focus-search-box")) {
        searchInput.classList.add("focus-search-box");
        searchInput.placeholder = "Search";
      }
    }
  });

  // Open search box and set placeholder on search input focus
  searchInput.addEventListener("focus", () => {
    updateSearchBox();
    searchInput.focus();
    if (window.innerWidth > 1080) {
      searchInput.classList.add("focus-search-box");
      searchInput.placeholder = "Search";
    }
  });

  // Close search box, remove placeholder, and remove value on search input focusout
  searchInput.addEventListener("focusout", e => {
    if (window.innerWidth > 1080 && e.target?.nodeName !== "INPUT") {
      console.log(e.target.nodeName);
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
  });

  // Close search box, remove placeholder, and remove value on reset button focusout
  resetInputButton.addEventListener("focusout", e => {
    if (window.innerWidth > 1080 && e.relatedTarget?.nodeName !== "INPUT") {
      console.log(e.target.nodeName);
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
  });

  // Close search box, remove placeholder, and remove value on submit button focusout
  submitInputButton.addEventListener("focusout", e => {
    if (window.innerWidth > 1080 && e.relatedTarget?.nodeName !== "INPUT") {
      console.log(e.target.nodeName);
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
  });
});
