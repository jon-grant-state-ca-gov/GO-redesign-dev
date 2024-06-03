/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.addEventListener("load", () => {
  const sidebarToggle = document.querySelector("header #caGov");
  const caGovMenu = document.getElementById("ca_gov_sidebar");
  const sidebar = document.querySelector(".sidebar-container");
  const moreServicesToggle = document.getElementById("more_services_toggle");
  const lessServicesToggle = document.getElementById("less_services_toggle");
  const moreServicesContainer = document.getElementById("more_services_container");
  const animatedCaGovIcon = document.querySelector("svg.cagov-animated");
  const leftMobileButton = document.querySelector(".nav-toggle");
  const navigationMobile = document.querySelector(".navigation");
  if (!sidebar || !sidebarToggle) return;
  sidebarToggle.addEventListener("keydown", e => {
    if (13 === e.keyCode) {
      toggleCaGovMenu;
    }
    if (32 === e.keyCode) {
      toggleCaGovMenu;
    }
  });

  // Escape key event listener
  document.addEventListener("keydown", e => {
    if (sidebar.style.display === "block") {
      if (e.key === "Escape") {
        e.stopPropagation();
        toggleCaGovMenu();
      }
    }
  });

  // Close menu on focusout (tabbing out) event
  caGovMenu.addEventListener("focusout", e => {
    const child = /** @type {Node} **/e.relatedTarget;
    const parent = /** @type {Node} **/e.currentTarget;
    if (child && !parent.contains(child)) {
      closeCaGovMenu();
    }
  });

  // Toggle CAGov menu on CAGov logo click
  sidebarToggle.addEventListener("click", toggleCaGovMenu);

  // Close CAGov menu on click out of CAGov menu
  document.addEventListener("click", e => {
    if (!caGovMenu.contains(e.target) && sidebar.style.display === "block") {
      closeCaGovMenu();
    }
  });
  const closeCaGovMenu = () => {
    sidebarToggle.classList.add("ca-gov-svg");
    sidebarToggle.classList.remove("ca-gov-close-icon");
    animatedCaGovIcon.style.display = "block";
    sidebar.style.display = "none";
    document.body.style.overflow = "auto";
  };

  // Toggle CAGov menu display
  function toggleCaGovMenu() {
    document.body.style.overflow = "hidden";
    if (window.innerWidth < 1080) {
      // Hide ham-bear-ger menu and toggle icon back to closed on mobile size
      leftMobileButton.ariaExpanded = "false";
      navigationMobile.classList.add("hidden");
    }
    if (sidebarToggle.classList.contains("ca-gov-svg")) {
      sidebarToggle.classList.add("ca-gov-close-icon");
      sidebarToggle.classList.remove("ca-gov-svg");
      animatedCaGovIcon.style.display = "none";
    } else {
      sidebarToggle.classList.remove("ca-gov-close-icon");
      sidebarToggle.classList.add("ca-gov-svg");
      animatedCaGovIcon.style.display = "block";
    }
    sidebar.style.display = sidebar.style.display !== "block" ? "block" : "none";
    if (sidebar.style.display === "none") {
      document.body.style.overflow = "auto";
    }
  }
  moreServicesToggle.addEventListener("click", () => {
    if (moreServicesContainer.classList.contains("hidden")) {
      moreServicesContainer.classList.remove("hidden");
      moreServicesToggle.classList.add("hidden");
    } else {
      moreServicesContainer.classList.add("hidden");
    }
  });
  lessServicesToggle.addEventListener("click", () => {
    moreServicesContainer.classList.add("hidden");
    moreServicesToggle.classList.remove("hidden");
  });
});

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.addEventListener("load", () => {
  const doc = document.documentElement;
  let prevScroll = window.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;
  const scrollNum = 40;
  const mainheader = document.querySelector("header");
  const navToggle = document.querySelector("header .nav-toggle");
  const navigation = document.querySelector("header .navigation");
  const sidebar = document.querySelector(".sidebar-container");
  const caGovToggle = document.querySelector(".cagov");
  const caGovLogo = document.getElementById("caGov");
  const caGovSvg = document.querySelector(".cagov-animated");
  const logo = document.querySelector(".logo");
  const headerNav = navigation.querySelector("ul.navlinks");
  const navSearch = navigation.querySelector("li.search");
  const googleTranslate = navigation.querySelector("li.google-translate");
  const searchBox = document.getElementById("search-box");
  if (!mainheader) return;

  // Escape key event listener
  document.addEventListener("keydown", e => {
    if (navigation.classList.contains("navigation-mobile") && !navigation.classList.contains("hidden")) {
      if (e.key === "Escape") {
        e.stopPropagation();
        document.body.style.overflow = "auto";
        navigation.classList.add("hidden");
        navToggle.ariaExpanded = "false";
      }

      // only if navToggle is focused and nav is open and tab key is pressed and shift is not pressed
      if (document.activeElement === navToggle && "true" === navToggle.ariaExpanded && e.key === "Tab" && e.shiftKey !== true) {
        setTimeout(function () {
          // focus on the first element in the navigation
          navigation.querySelectorAll("input,a")[0].focus();
        }, 0);
      }
    }
  });

  // Close menu on focusout (tabbing out) event, desktop only
  headerNav.addEventListener("focusout", e => {
    if (!navigation.classList.contains("navigation-mobile") && !navigation.classList.contains("hidden")) {
      const child = /** @type {Node} **/e.relatedTarget;
      const parent = /** @type {Node} **/e.currentTarget;
      if (child && !parent.contains(child) && "INPUT" !== child.nodeName) {
        // if tabbing out of the navigation and into the logo
        if ("a" === child.localName) {
          navToggle.focus();
        }

        // if tabbing out of the navigation and into the cagov sidebar
        if ("button" === child.localName) {
          document.body.style.overflow = "auto";
          navigation.classList.add("hidden");
          navToggle.ariaExpanded = "false";
        }
      }
    }
  });

  /* compacted header / hiding default header on scroll */
  if (scrollNum < prevScroll && window.innerWidth > 1080) {
    mainheader.classList.add("compacted", "transparent-bg", "remove-box-shadow");
    caGovToggle.classList.add("hidden");
    if (logo) {
      logo.classList.add("hidden");
    }
    if (navigation) {
      navigation.classList.add("hidden");
    }
  }

  // Set proper header and nav style on load
  if (window.innerWidth < 1080) {
    mainheader.classList.add("mobile", "gray-bg");
    if (navigation) {
      navigation.classList.add("hidden");
    }
  } else {
    mainheader.classList.remove("mobile", "gray-bg");
    if (scrollNum > prevScroll && navigation) {
      navigation.classList.remove("hidden");
    }
  }
  window.addEventListener("scroll", () => {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = window.scrollY || doc.scrollTop;
    // remove/add function
    let logoFunc = "add";
    let navFunc = "add";
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }
    if (direction !== prevDirection) {
      // Mobile Only
      if (window.innerWidth < 1080) {
        // scrolling down
        if (direction === 2 && curScroll > scrollNum) {
          mainheader.classList.remove("gray-bg");
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          logoFunc = "add";
          caGovToggle.classList.add("hidden");

          // scrolling up
        } else if (direction === 1 && curScroll < scrollNum) {
          mainheader.classList.add("gray-bg");
          mainheader.classList.remove("transparent-bg", "remove-box-shadow");
          logoFunc = "remove";
          caGovToggle.classList.remove("hidden");
        }
      } else {
        // Desktop Only
        // Toggle Header
        // scrolling down
        if (direction === 2 && curScroll > scrollNum) {
          // Hide nav, logo, caGovToggle on scroll down
          caGovToggle.classList.add("hidden");
          mainheader.classList.add("transparent-bg", "remove-box-shadow", "compacted");
          sidebar.classList.add("sidebar-mobile");
          logoFunc = "add";
          prevDirection = direction;
          // scrolling up
        } else if (direction === 1 && curScroll < scrollNum) {
          if (window.innerWidth > 1080) {
            // Desktop width
            // Set hamburger menu icon to closed state
            navToggle.ariaExpanded = "false";
            caGovToggle.classList.remove("hidden");
            mainheader.classList.remove("transparent-bg", "remove-box-shadow", "compacted");
            navFunc = "remove";
          }
          sidebar.classList.remove("sidebar-mobile");
          logoFunc = "remove";
          prevDirection = direction;
        }
      }

      // if logo exists
      if (logo) {
        logo.classList[logoFunc]("hidden");
      }

      // if navigation exists
      if (navigation) {
        navigation.classList[navFunc]("hidden");
      }
    }
    prevScroll = curScroll;
    if (direction === 1 && window.innerWidth > 1080) {
      if (!mainheader.classList.contains("transparent-bg")) {
        if (logo) {
          logo.classList.remove("hidden");
        }
        if (navigation) {
          navigation.classList.remove("hidden");
        }
      }
    }
  });

  /* we also add the mobile class if screen is smaller than 1080px */
  window.addEventListener("resize", () => {
    // Was causing unexpected issues with clicking into search bar
    // Set proper header and nav style on load
    // if (window.innerWidth < 1080) {
    //   mainheader.classList.add("mobile", "gray-bg");
    //   if (navigation) {
    //     navigation.classList.add("hidden");
    //   }
    // } else {
    //   mainheader.classList.remove("mobile", "gray-bg");

    //   if (scrollNum > prevScroll && navigation) {
    //     navigation.classList.remove("hidden");
    //   }
    // }

    // remove/add function
    let searchFunc = "remove";

    //  mobile only
    if (window.innerWidth < 1080) {
      mainheader.classList.add("mobile");
      searchFunc = "add";
      if (navigation) {
        navigation.classList.add("navigation-mobile");
      }
      if (searchBox) {
        searchBox.classList.add("focus-search-box");
      }

      // Was causing unexpected issues with clicking into search bar
      // if (navSearch) {
      //   headerNav.prepend(navSearch);
      // }

      // desktop only
    } else if (window.innerWidth > 1080) {
      mainheader.classList.remove("mobile");
      searchFunc = "remove";
      if (navSearch) {
        headerNav.append(navSearch);
      }
      if (navigation) {
        navigation.classList.remove("navigation-mobile");
      }
      if (googleTranslate) {
        headerNav.append(googleTranslate);
      }
      if (scrollNum < prevScroll) {
        mainheader.classList.remove("gray-bg");
      } else if (navigation) {
        navigation.classList.remove("hidden");
      }
    }
    if (searchBox) {
      searchBox.classList[searchFunc]("focus-search-box");
    }
  });
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      // remove/add function
      let logoFunc = "remove";
      let navFunc = "remove";

      // Hide cagov sidebar and show correct icon
      sidebar.style.display = "none";
      caGovLogo.classList.remove("ca-gov-close-icon");
      caGovLogo.classList.add("ca-gov-svg");
      caGovSvg.style.display = "block";
      this.ariaExpanded = this.ariaExpanded !== "true";
      if ("true" === this.ariaExpanded) {
        mainheader.classList.remove("transparent-bg", "remove-box-shadow");
        caGovToggle.classList.remove("hidden");
        logoFunc = "remove";
        navFunc = "remove";

        // Mobile only
        if (window.innerWidth < 1080) {
          document.body.style.overflow = "hidden";
          if (navigation) {
            navigation.classList.add("navigation-mobile");
          }
          if (searchBox) {
            searchBox.classList.add("focus-search-box");
          }
          if (navSearch) {
            headerNav.prepend(navSearch);
          }
        }
      } else {
        document.body.style.overflow = "auto";
        navFunc = "add";

        // Desktop Only
        if (window.innerWidth > 1080) {
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          caGovToggle.classList.add("hidden");
          logoFunc = "add";
        }

        // Mobile only & at top of screen
        if (window.innerWidth < 1080 && curScroll > scrollNum) {
          logoFunc = "add";
          mainheader.classList.remove("gray-bg");
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          caGovToggle.classList.add("hidden");
          if (logo) {
            logo.classList[logoFunc]("hidden");
          }
        }
      }

      // if logo exists
      if (logo) {
        logo.classList[logoFunc]("hidden");
      }

      // if navigation exists
      if (navigation) {
        navigation.classList[navFunc]("hidden");
      }
    });
  }
});

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
window.addEventListener("load", () => {
  const searchSVG = document.querySelector("header .search-svg");
  const searchInput = document.querySelector("header #search-box");
  if (!searchInput) return;
  searchSVG.addEventListener("click", () => {
    searchInput.focus();
    if (window.innerWidth > 1080) {
      if (!searchInput.classList.contains("focus-search-box")) {
        searchInput.classList.add("focus-search-box");
      }
    }
  });
  searchInput.addEventListener("focus", () => {
    searchInput.focus();
    if (window.innerWidth > 1080) {
      searchInput.classList.add("focus-search-box");
    }
  });
  searchInput.addEventListener("focusout", () => {
    if (window.innerWidth > 1080) {
      searchInput.classList.remove("focus-search-box");
    }
  });
  searchInput.addEventListener("touchend", e => {
    e.preventDefault();
    searchInput.focus();
  });
});

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/gov-branding.svg";

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_ca_gov_toggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scripts_mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _images_gov_branding_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
// Scripts




// Styles


// Assets

})();

/******/ })()
;