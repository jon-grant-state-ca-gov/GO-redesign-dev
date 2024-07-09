window.addEventListener("load", () => {
  const searchSVG = document.querySelector("header .search-svg");
  const searchInput = document.querySelector("header #search-box");
  const resetInputButton = document.querySelector(".ca-gov-close-icon-small");
  const submitInputButton = document.querySelector(".search-submit-icon");

  if (!searchInput) return;

  // document.addEventListener("click", e => {
  //   console.log(e.target);
  //   console.log(e.target.nodeName);

  //   if (window.innerWidth > 1080) {
  //     if (searchInput.classList.contains("focus-search-box")) {
  //       console.log("Has focus-search-box");
  //       console.log(e.target?.nodeName);
  //       if (e.target?.nodeName !== "FORM" || e.target?.nodeName !== "FORM") {
  //         searchInput.classList.remove("focus-search-box");
  //         searchInput.value = "";
  //         searchInput.placeholder = "";
  //       }
  //     }
  //   }
  // });

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
