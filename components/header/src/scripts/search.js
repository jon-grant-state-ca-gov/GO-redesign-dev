window.addEventListener("load", () => {
  const searchSVG = document.querySelector("header .search-svg");
  const searchInput = document.querySelector("header #search-box");
  const resetInputButton = document.querySelector(".ca-gov-close-icon-small");
  const submitInputButton = document.querySelector(".search-submit-icon");

  if (!searchInput) return;

  if (window.innerWidth < 1080) {
    searchInput.placeholder = "Search";
  }

  if (searchInput.value === "") {
    submitInputButton.classList.remove("search-submit-icon");
    submitInputButton.classList.add("search-svg-small-icon");
  } else {
    submitInputButton.classList.remove("search-svg-small-icon");
    submitInputButton.classList.add("search-submit-icon");
  }

  searchSVG.addEventListener("click", () => {
    console.log("What is search value? ", searchInput.value);
    if (searchInput.value === "") {
      submitInputButton.classList.remove("search-submit-icon");
      submitInputButton.classList.add("search-svg-small-icon");
    } else {
      submitInputButton.classList.remove("search-svg-small-icon");
      submitInputButton.classList.add("search-submit-icon");
    }
  });

  document.addEventListener("keyup", () => {
    console.log("What is search value? ", searchInput.value);
    if (searchInput.value === "") {
      submitInputButton.classList.remove("search-submit-icon");
      submitInputButton.classList.add("search-svg-small-icon");
    } else {
      submitInputButton.classList.remove("search-svg-small-icon");
      submitInputButton.classList.add("search-submit-icon");
    }
  });

  document.addEventListener("keyup", e => {
    if (window.innerWidth > 1080 && e.key === "Escape") {
      e.stopPropagation();
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
  });

  resetInputButton.addEventListener("click", e => {
    e.preventDefault();
    if (window.innerWidth > 1080) {
      searchInput.classList.remove("focus-search-box");
      searchInput.placeholder = "";
    }
    searchInput.value = "";
    searchInput.placeholder = "Search";
  });

  searchSVG.addEventListener("click", () => {
    searchInput.focus();
    if (window.innerWidth > 1080) {
      if (!searchInput.classList.contains("focus-search-box")) {
        searchInput.classList.add("focus-search-box");
        searchInput.placeholder = "Search";
      }
    }
  });

  searchInput.addEventListener("focus", () => {
    searchInput.focus();
    if (window.innerWidth > 1080) {
      searchInput.classList.add("focus-search-box");
      searchInput.placeholder = "Search";
    }
  });

  searchInput.addEventListener("focusout", e => {
    if (window.innerWidth > 1080 && e.target?.nodeName !== "INPUT") {
      console.log(e.target.nodeName);
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
  });

  resetInputButton.addEventListener("focusout", e => {
    if (window.innerWidth > 1080 && e.relatedTarget?.nodeName !== "INPUT") {
      console.log(e.target.nodeName);
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
  });

  submitInputButton.addEventListener("focusout", e => {
    if (window.innerWidth > 1080 && e.relatedTarget?.nodeName !== "INPUT") {
      console.log(e.target.nodeName);
      searchInput.classList.remove("focus-search-box");
      searchInput.value = "";
      searchInput.placeholder = "";
    }
  });
});
