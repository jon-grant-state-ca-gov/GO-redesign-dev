/* eslint-disable yoda */
window.addEventListener('load', () => {
  const doc = document.documentElement;

  let curScroll;
  const prevScroll = window.scrollY || doc.scrollTop;
  const mainheader = document.querySelector('header');
  const navToggle = document.querySelector('header .nav-toggle');
  const navigation = document.querySelector('header .navigation');
  const sidebar = document.querySelector('.sidebar-container');
  const caGovToggle = document.querySelector('.cagov');
  const caGovLogo = document.getElementById('caGov');
  const logo = document.querySelector('.logo');
  const headerNav = navigation.querySelector('ul.navlinks');
  const navSearch = navigation.querySelector('li.search');
  const googleTranslate = navigation.querySelector('li.google-translate');
  const searchBox = document.getElementById('search-box');

  // Set proper header and nav style on load
  // Use compacted style if not at top of page
  if (prevScroll !== 0) {
    mainheader.classList.add(
      'transparent-bg',
      'remove-box-shadow',
      'compacted'
    );
    logo?.classList.add('hidden');
    navigation?.classList.add('hidden');
    caGovToggle?.classList.add('hidden');
  }
  //If mobile
  if (window.innerWidth < 1080) {
    mainheader?.classList.add('mobile', 'gray-bg');
    navigation?.classList.add('hidden');
  }

  // Determine icon to display
  if (window.innerWidth < 1080) {
    caGovLogo?.classList.remove('desktop-icon');
    caGovLogo?.classList.add('mobile-icon');
  } else {
    caGovLogo?.classList.remove('mobile-icon');
    caGovLogo?.classList.add('desktop-icon');
  }

  // On resize, make sure to only lock menu scroll when CA gov menu or hamburger menu is open
  const lockMenuScroll = () => {
    if (
      sidebar.style.display === 'block' ||
      (!navigation.classList.contains('hidden') &&
        navigation.classList.contains('navigation-mobile'))
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeHamburgerMenu = () => {
    document.body.style.overflow = 'auto';
    navigation?.classList.add('hidden');
    if (navToggle) {
      navToggle.ariaExpanded = 'false';
      navToggle.ariaLabel = 'Open the navigation menu';
    }
  };

  const hideMobileHeader = () => {
    mainheader?.classList.remove('gray-bg');
    mainheader?.classList.add('transparent-bg', 'remove-box-shadow');
    logo?.classList.add('hidden');
    caGovToggle?.classList.add('hidden');
  };

  const showMobileHeader = () => {
    mainheader?.classList.add('gray-bg');
    mainheader?.classList.remove('transparent-bg', 'remove-box-shadow');
    logo?.classList.remove('hidden');
    caGovToggle?.classList.remove('hidden');
  };

  const hideDesktopHeader = () => {
    if (navToggle) {
      navToggle.ariaExpanded = 'false';
      navToggle.ariaLabel = 'Open the navigation menu';
    }
    caGovToggle?.classList.add('hidden');
    mainheader?.classList.add(
      'transparent-bg',
      'remove-box-shadow',
      'compacted'
    );
    logo?.classList.add('hidden');
    navigation?.classList.add('hidden');

    sidebar?.classList.add('sidebar-mobile');
  };

  const showDesktopHeader = () => {
    if (navToggle) {
      navToggle.ariaExpanded = 'false';
      navToggle.ariaLabel = 'Open the navigation menu';
    }
    caGovToggle?.classList.remove('hidden');
    mainheader?.classList.remove(
      'transparent-bg',
      'remove-box-shadow',
      'compacted'
    );
    sidebar?.classList.remove('sidebar-mobile');
    logo?.classList.remove('hidden');
    caGovToggle?.classList.remove('hidden');
    navigation?.classList.remove('hidden');
  };

  if (!mainheader) {
    return;
  }

  // Escape key event listener
  document.addEventListener('keydown', e => {
    if (
      navigation.classList.contains('navigation-mobile') &&
      !navigation.classList.contains('hidden')
    ) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        if (searchBox.value.length > 0) {
          searchBox.value = '';
        } else {
          closeHamburgerMenu();
        }
      }

      // only if navToggle is focused and nav is open and tab key is pressed and shift is not pressed
      if (
        document.activeElement === navToggle &&
        'true' === navToggle.ariaExpanded &&
        e.key === 'Tab' &&
        e.shiftKey !== true
      ) {
        setTimeout(() => {
          // focus on the first element in the navigation
          navigation.querySelectorAll('input,a')[0].focus();
        }, 0);
      }
    }
  });

  // Close menu on focusout (tabbing out) event, mobile layout only
  headerNav.addEventListener('focusout', e => {
    if (
      navigation.classList.contains('navigation-mobile') &&
      !navigation.classList.contains('hidden')
    ) {
      const child = /** @type {Node} **/ (e.relatedTarget);
      const parent = /** @type {Node} **/ (e.currentTarget);

      if (child && !parent.contains(child) && 'INPUT' !== child.nodeName) {
        // if tabbing out of the navigation and into the logo
        if ('a' === child.localName) {
          navToggle.focus();
        }

        // if tabbing out of the navigation and into the cagov sidebar
        if ('button' === child.localName) {
          closeHamburgerMenu();
        }
      }
    }
  });

  // On click listener
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      // Hide cagov sidebar and show correct icon
      sidebar.style.display = 'none';
      caGovLogo.classList.remove('ca-gov-close-icon');
      caGovLogo.classList.add('ca-gov-svg');

      this.ariaExpanded = this.ariaExpanded !== 'true';

      // Hamburger menu is open
      if ('true' === this.ariaExpanded) {
        mainheader.classList.remove('transparent-bg', 'remove-box-shadow');
        caGovToggle.classList.remove('hidden');
        navToggle.ariaLabel = 'Close the navigation menu';

        // Mobile only
        if (window.innerWidth < 1080) {
          document.body.style.overflow = 'hidden';
          logo?.classList.remove('hidden');
          navigation?.classList.remove('hidden');
          navigation?.classList.add('navigation-mobile');
          searchBox?.classList.add('focus-search-box');

          if (navSearch) {
            headerNav.prepend(navSearch);
          }
          // Desktop only
        } else {
          navigation?.classList.remove('hidden');
          logo?.classList.remove('hidden');
        }

        // Hamburger menu is closed
      } else {
        document.body.style.overflow = 'auto';

        // Desktop Only
        if (window.innerWidth > 1080) {
          mainheader.classList.add('transparent-bg', 'remove-box-shadow');
          navigation?.classList.add('hidden');
          logo?.classList.add('hidden');
          caGovToggle.classList.add('hidden');
        }

        // Mobile only
        if (window.innerWidth < 1080) {
          mainheader.classList.remove('gray-bg');
          mainheader.classList.add('transparent-bg', 'remove-box-shadow');
          navigation?.classList.add('hidden');
          caGovToggle.classList.add('hidden');
          logo?.classList.add('hidden');

          // Top of screen
          if (curScroll === 0) {
            mainheader.classList.add('gray-bg');
            mainheader.classList.remove('transparent-bg', 'remove-box-shadow');
            caGovToggle.classList.remove('hidden');
            logo?.classList.remove('hidden');
          }
        }
      }
    });
  }

  window.addEventListener('scroll', () => {
    curScroll = window.scrollY || doc.scrollTop;

    // Mobile Only
    if (window.innerWidth < 1080) {
      // Any scroll on mobile displays hamburger menu only
      // Clicking hamburger menu triggers scroll listener on CDEV
      // Add check to not hide mobile header if navigation menu is visible
      if (navigation?.classList.contains('hidden')) {
        hideMobileHeader();
      }

      // Show at top of the page
      if (curScroll === 0) {
        showMobileHeader();
      }
    } else {
      // Desktop Only
      // Any scroll on desktop displays hamburger menu only
      if (!sidebar?.style.display || sidebar?.style.display === 'none') {
        hideDesktopHeader();
      }

      // Show at top of the page
      if (curScroll === 0) {
        showDesktopHeader();
      }
    }
  });

  /* we also add the mobile class if screen is smaller than 1080px */
  window.addEventListener('resize', () => {
    curScroll = window.scrollY || doc.scrollTop;

    if (window.innerWidth < 1080) {
      caGovLogo?.classList.remove('desktop-icon');
      caGovLogo?.classList.add('mobile-icon');
    } else {
      caGovLogo?.classList.remove('mobile-icon');
      caGovLogo?.classList.add('desktop-icon');
    }

    // Was causing unexpected issues with clicking into search bar
    // Checking if first child may prevent menu close on search box click
    if (navSearch !== headerNav.firstElementChild) {
      headerNav.prepend(navSearch);
    }

    //  mobile only
    if (window.innerWidth < 1080) {
      lockMenuScroll();

      if (navToggle.ariaExpanded === 'false') {
        navigation?.classList.add('hidden');
      }

      mainheader.classList.add('mobile', 'gray-bg');
      mainheader.classList.remove('compacted');
      navigation?.classList.add('navigation-mobile');
      searchBox?.classList.add('focus-search-box');

      // desktop only
    } else {
      // If CA Gov or hamburger menu are open, body overflow is hidden
      lockMenuScroll();

      mainheader.classList.remove('mobile');
      searchBox?.classList.remove('focus-search-box');
      navigation?.classList.remove('navigation-mobile');

      if (navSearch) {
        headerNav.append(navSearch);
      }

      if (googleTranslate) {
        headerNav.append(googleTranslate);
      }

      // Not at top of the page
      if (curScroll !== 0) {
        mainheader.classList.add('compacted');
      } else if (navigation) {
        navigation.classList.remove('hidden');
      }
    }
  });
});
