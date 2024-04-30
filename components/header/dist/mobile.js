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
  const headerNav = navigation.querySelector('ul.navlinks');
  const navSearch = navigation.querySelector('li.search');
  const googleTranslate = navigation.querySelector('li.google-translate');

  if (!mainheader) return;

  /* compacted header / hiding default header on scroll */
  if (scrollNum < prevScroll && window.innerWidth > 1080) {
    mainheader.classList.add("compacted", "transparent-bg", "remove-box-shadow");
    logo.classList.add("hidden");
    caGovToggle.classList.add("hidden");
    navigation.classList.add("hidden");
  }

  // Set proper header and nav style on load
  if (window.innerWidth < 1080) {
    mainheader.classList.add("mobile", "gray-bg");
    navigation.classList.add("hidden");
  } else {
    mainheader.classList.remove("mobile", "gray-bg");

    if (scrollNum > prevScroll ){
      navigation.classList.remove("hidden");
    }
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

      // Mobile Only
      if( window.innerWidth < 1080 ){

        // scrolling down
        if (direction === 2 && curScroll > scrollNum) {
          mainheader.classList.remove("gray-bg");
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          if( "true" === navToggle.ariaExpanded ){
            
          }

          logo.classList.add("hidden");
          caGovToggle.classList.add("hidden");

        // scrolling up
        } else if (direction === 1 && curScroll < scrollNum) {
          mainheader.classList.add("gray-bg");
          mainheader.classList.remove("transparent-bg", "remove-box-shadow");

          logo.classList.remove("hidden");
          caGovToggle.classList.remove("hidden");
        }
      }else{ // Desktop Only
        // Toggle Header
        // scrolling down
        if (direction === 2 && curScroll > scrollNum) {
          // Hide nav, logo, caGovToggle on scroll down
          mainheader.classList.add("compacted");

          caGovToggle.classList.add("hidden");
          logo.classList.add("hidden");
          navigation.classList.add("hidden");
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          sidebar.classList.add("sidebar-mobile");
          prevDirection = direction;
          // scrolling up
        } else if (direction === 1 && curScroll < scrollNum) {
          if (window.innerWidth > 1080) {
            //mainheader.classList.remove("mobile");
            mainheader.classList.remove("compacted");
            caGovToggle.classList.remove("hidden");
            navigation.classList.remove("hidden");
            mainheader.classList.remove("transparent-bg", "remove-box-shadow");
          }
          sidebar.classList.remove("sidebar-mobile");
          logo.classList.remove("hidden");
          prevDirection = direction;
        }
      }
      
    }
    prevScroll = curScroll;
  });

  /* we also add the mobile class if screen is smaller than 1080px */
  window.addEventListener("resize", () => {
    //  mobile only
    if (window.innerWidth < 1080) {
      mainheader.classList.add("mobile");
      navigation.classList.add("navigation-mobile", "hidden");
      
    // desktop only
    }else if( window.innerWidth > 1080 ){
      mainheader.classList.remove("mobile");
      navigation.classList.remove("navigation-mobile");

      headerNav.append(navSearch);
      
      if( googleTranslate ){
        headerNav.append(googleTranslate);
      }

      if( scrollNum < prevScroll ){
        mainheader.classList.remove("gray-bg")
      }else{
        navigation.classList.remove("hidden");
      }
    }
  });


  

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      this.ariaExpanded = this.ariaExpanded !== "true";
     

      if ("true" === this.ariaExpanded) {
        navigation.classList.remove("hidden");
        //mainheader.classList.add("gray-bg", "add-box-shadow");
        mainheader.classList.remove("transparent-bg", "remove-box-shadow");
        logo.classList.remove("hidden");
        caGovToggle.classList.remove("hidden");

        // Mobile only
        if (window.innerWidth < 1080) {
          navigation.classList.add("navigation-mobile");
          headerNav.prepend(navSearch)
        }
      } else {
        navigation.classList.add("hidden");

        // Desktop Only
        if (window.innerWidth > 1080) {
          mainheader.classList.add("transparent-bg", "remove-box-shadow");
          logo.classList.add("hidden");
          caGovToggle.classList.add("hidden");
        }

        // Mobile only
        if (window.innerWidth < 1080) {
        }
      }
    });
  }
});
