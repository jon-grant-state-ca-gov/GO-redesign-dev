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
  const sidebar = document.getElementById("ca_gov_sidebar");
  const caGovToggle = document.querySelector(".cagov");
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
      navToggle.ariaExpanded = "false";

      // Toggle Header
      if (direction === 2 && curScroll > scrollNum) {
        // Hide nav, logo, caGovToggle on scroll down
        mainheader.classList.add("mobile");
        caGovToggle.classList.add("hidden");
        logo.classList.add("hidden");
        navigation.classList.add("hidden");
        mainheader.classList.add("transparent-bg remove-box-shadow");
        sidebar.classList.add("sidebar-mobile");
        prevDirection = direction;
      } else if (direction === 1 && curScroll < scrollNum) {
        if (window.innerWidth > 1080) {
          mainheader.classList.remove("mobile");
          caGovToggle.classList.remove("hidden");
          navigation.classList.remove("hidden");
          mainheader.classList.add("gray-bg");
        }
        sidebar.classList.remove("sidebar-mobile");
        logo.classList.remove("hidden");
        prevDirection = direction;
      }
    }
    prevScroll = curScroll;
  });

  // Set proper header and nav style on load
  if (window.innerWidth < 1080) {
    mainheader.classList.add("mobile");
    navigation.classList.add("navigation-mobile");
  } else {
    mainheader.classList.remove("mobile");
    navigation.classList.remove("navigation-mobile");
  }

  /* we also add the mobile class if screen is smaller than 1080px */
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1080) {
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
        navigation.classList.remove("hidden");
        mainheader.classList.add("gray-bg add-box-shadow");
        logo.classList.remove("hidden");
        caGovToggle.classList.remove("hidden");
        if (window.innerWidth > 1080) {
          mainheader.classList.add("gray-bg add-box-shadow");
        }
      } else {
        navigation.classList.add("hidden");
        if (window.innerWidth > 1080) {
          mainheader.classList.add("transparent-bg remove-box-shadow");
          logo.classList.add("hidden");
          caGovToggle.classList.remove("hidden");
        }
      }
    });
  }
});
