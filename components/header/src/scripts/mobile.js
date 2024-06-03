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

  const closeHamburgerMenu = () => {
    document.body.style.overflow = "auto";
    navigation.classList.add("hidden");
    navToggle.ariaExpanded = "false";
  };

  if (!mainheader) return;

  // Escape key event listener
  document.addEventListener("keydown", e => {
    if (
      navigation.classList.contains("navigation-mobile") &&
      !navigation.classList.contains("hidden")
    ) {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeHamburgerMenu();
      }

      // only if navToggle is focused and nav is open and tab key is pressed and shift is not pressed
      if (
        document.activeElement === navToggle &&
        "true" === navToggle.ariaExpanded &&
        e.key === "Tab" &&
        e.shiftKey !== true
      ) {
        setTimeout(() => {
          // focus on the first element in the navigation
          navigation.querySelectorAll("input,a")[0].focus();
        }, 0);
      }
    }
  });

  // Close menu on focusout (tabbing out) event, mobile layout only
  headerNav.addEventListener("focusout", e => {
    if (
      navigation.classList.contains("navigation-mobile") &&
      !navigation.classList.contains("hidden")
    ) {
      const child = /** @type {Node} **/ (e.relatedTarget);
      const parent = /** @type {Node} **/ (e.currentTarget);

      if (child && !parent.contains(child) && "INPUT" !== child.nodeName) {
        // if tabbing out of the navigation and into the logo
        if ("a" === child.localName) {
          navToggle.focus();
        }

        // if tabbing out of the navigation and into the cagov sidebar
        if ("button" === child.localName) {
          closeHamburgerMenu();
        }
      }
    }
  });

  /* compacted header / hiding default header on scroll */
  // if (scrollNum < prevScroll && window.innerWidth > 1080) {
  //   mainheader.classList.add(
  //     "compacted",
  //     "transparent-bg",
  //     "remove-box-shadow"
  //   );
  //   caGovToggle.classList.add("hidden");

  //   if (logo) {
  //     logo.classList.add("hidden");
  //   }

  //   if (navigation) {
  //     navigation.classList.add("hidden");
  //   }
  // }

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
      //scrolling down
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolling up
      direction = 1;
    }

    // console.log(`Which way am I scrolling? ${direction}`);
    console.log(`curScroll is ${curScroll}`);
    console.log(`scrollNum is ${scrollNum}`);
    console.log(`prevScroll is ${prevScroll}`);

    if (direction !== prevDirection) {
      // Mobile Only
      if (window.innerWidth < 1080) {
        // scrolling down
        if (direction === 2 && curScroll > 0) {
          mainheader.classList.remove("gray-bg");
          mainheader.classList.add("transparent-bg", "remove-box-shadow");

          logoFunc = "add";
          caGovToggle.classList.add("hidden");

          // scrolling up
        } else if (direction === 1 && curScroll === 0) {
          mainheader.classList.add("gray-bg");
          mainheader.classList.remove("transparent-bg", "remove-box-shadow");

          logoFunc = "remove";
          caGovToggle.classList.remove("hidden");
        }
      } else {
        // Desktop Only
        // Toggle Header
        // scrolling down
        if (direction === 2 && curScroll > 0) {
          // Hide nav, logo, caGovToggle on scroll down
          caGovToggle.classList.add("hidden");
          mainheader.classList.add(
            "transparent-bg",
            "remove-box-shadow",
            "compacted"
          );

          sidebar.classList.add("sidebar-mobile");

          logoFunc = "add";
          prevDirection = direction;
          // scrolling up
        } else if (direction === 1 && curScroll === 0) {
          if (window.innerWidth > 1080) {
            // Desktop width
            // Set hamburger menu icon to closed state
            navToggle.ariaExpanded = "false";
            caGovToggle.classList.remove("hidden");
            mainheader.classList.remove(
              "transparent-bg",
              "remove-box-shadow",
              "compacted"
            );

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
    // remove/add function
    let searchFunc = "remove";

    //  mobile only
    if (window.innerWidth < 1080) {
      if (!navigation.classList.contains("hidden")) {
        navigation.classList.add("hidden");
      }
      mainheader.classList.add("mobile");

      searchFunc = "add";

      if (navigation) {
        navigation.classList.add("navigation-mobile");
      }

      if (searchBox) {
        searchBox.classList.add("focus-search-box");
      }

      // Was causing unexpected issues with clicking into search bar
      // Checking if first child may prevent menu close on search box click
      if (navSearch !== headerNav.firstElementChild) {
        headerNav.prepend(navSearch);
      }

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
        console.log("What is this doing?");
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
