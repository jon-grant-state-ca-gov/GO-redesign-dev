window.addEventListener("load", () => {
  const doc = document.documentElement;

  let prevScroll = window.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;
  let scrollNum = 40;

  const mainheader = document.querySelector("header");
  const navToggle = document.querySelector("header .nav-toggle");
  const navigation = document.querySelector("header .navigation");
  const caGovLogo = document.querySelector(".cagov");
  const sidebar = document.getElementById("ca_gov_sidebar");
  const sidebarToggle = document.querySelector("header #caGov");
  const logo = document.querySelector(".logo");

  if (!mainheader) return;

  /* mobile header / hiding default header on scroll */
  if (scrollNum < prevScroll) {
    mainheader.classList.add("mobile");
  }

  window.addEventListener("scroll", () => {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */

    curScroll = window.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      // navToggle.ariaExpanded = "false";

      // Toggle Header
      if (
        direction === 2 &&
        curScroll > scrollNum &&
        navToggle.ariaExpanded === "false"
      ) {
        mainheader.classList.add("mobile");
        navigation.style.display = "none";
        logo.style.display = "none";
        caGovLogo.style.display = "none";

        mainheader.style.background = "transparent";
        mainheader.style.boxShadow = "none";

        sidebar.classList.add("sidebar-mobile");
        sidebar.style.display = "none";
        prevDirection = direction;
      } else if (direction === 1 && curScroll < scrollNum) {
        if (window.innerWidth > 992) {
          mainheader.classList.remove("mobile");
          navigation.style.display = "block";
          mainheader.style.background = "var(--grey-background, #eee)";
        }
        sidebar.classList.remove("sidebar-mobile");
        sidebarToggle.classList.remove("ca-gov-close-icon");
        sidebarToggle.classList.add("ca-gov-svg");
        mainheader.style.background = "var(--grey-background, #eee)";
        mainheader.style.boxShadow =
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        logo.style.display = "block";
        caGovLogo.style.display = "block";
        prevDirection = direction;
      }
    }
    prevScroll = curScroll;
  });

  // Set proper header and nav style on load
  if (window.innerWidth < 992) {
    mainheader.classList.add("mobile");
    navigation.classList.add("navigation-mobile");
  } else {
    mainheader.classList.remove("mobile");
    navigation.classList.remove("navigation-mobile");
  }

  /* we also add the mobile class if screen is smaller than 992px */
  window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
      mainheader.classList.add("mobile");
      navigation.classList.add("navigation-mobile");
    } else {
      mainheader.classList.remove("mobile");
      navigation.classList.remove("navigation-mobile");
    }
  });

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      this.ariaExpanded = this.ariaExpanded !== "true";

      if ("true" === this.ariaExpanded) {
        navigation.style.display = "block";
        mainheader.style.background = "var(--grey-background, #eee)";
        mainheader.style.boxShadow =
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        logo.style.display = "block";
        caGovLogo.style.display = "block";
        if (window.innerWidth > 992) {
          mainheader.style.background = "var(--grey-background, #eee)";
          mainheader.style.boxShadow =
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        }
      } else {
        navigation.style.display = "none";
        if (window.innerWidth > 992) {
          mainheader.style.background = "transparent";
          mainheader.style.boxShadow = "none";
          logo.style.display = "block";
          caGovLogo.style.display = "block";
        }
      }
    });
  }
});
