window.addEventListener('load', () => {
  const sidebarToggle = document.querySelector('header #caGov');
  const caGovMenu = document.getElementById('ca_gov_sidebar');
  const sidebar = document.querySelector('.sidebar-container');
  const moreServicesToggle = document.getElementById('more_services_toggle');
  const lessServicesToggle = document.getElementById('less_services_toggle');
  const moreServicesContainer = document.getElementById(
    'more_services_container'
  );
  const animatedCaGovIcon = document.querySelector('svg.cagov-animated');
  const leftMobileButton = document.querySelector('.nav-toggle');
  const navigationMobile = document.querySelector('.navigation');

  if (!sidebar || !sidebarToggle) {
    return;
  }

  sidebarToggle.addEventListener('keydown', e => {
    if (13 === e.keyCode) {
      toggleCaGovMenu();
    }

    if (32 === e.keyCode) {
      toggleCaGovMenu();
    }
  });

  // Escape key event listener
  document.addEventListener('keydown', e => {
    if (sidebar.style.display === 'block') {
      if (e.key === 'Escape') {
        e.stopPropagation();
        toggleCaGovMenu();
      }
    }
  });

  // Close menu on focusout (tabbing out) event
  caGovMenu.addEventListener('focusout', e => {
    const child = /** @type {Node} **/ (e.relatedTarget);
    const parent = /** @type {Node} **/ (e.currentTarget);

    if (child && !parent.contains(child)) {
      closeCaGovMenu();
    }
  });

  // Toggle CAGov menu on CAGov logo click
  sidebarToggle.addEventListener('click', toggleCaGovMenu);

  // Close CAGov menu on click out of CAGov menu
  document.addEventListener('click', e => {
    if (!caGovMenu.contains(e.target) && sidebar.style.display === 'block') {
      closeCaGovMenu();
    }
  });

  const closeCaGovMenu = () => {
    sidebarToggle.classList.add('ca-gov-svg');
    sidebarToggle.ariaLabel = 'Open the CA.gov menu';
    sidebarToggle.classList.remove('ca-gov-close-icon');
    animatedCaGovIcon.style.display = 'block';
    sidebar.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  // Toggle CAGov menu display
  function toggleCaGovMenu() {
    document.body.style.overflow = 'hidden';

    if (window.innerWidth < 1080) {
      // Hide ham-bear-ger menu and toggle icon back to closed on mobile size
      leftMobileButton.ariaExpanded = 'false';
      navigationMobile.classList.add('hidden');
    }

    if (sidebarToggle.classList.contains('ca-gov-svg')) {
      sidebarToggle.classList.add('ca-gov-close-icon');
      sidebarToggle.ariaLabel = 'Close the CA.gov menu';
      sidebarToggle.classList.remove('ca-gov-svg');
      animatedCaGovIcon.style.display = 'none';
    } else {
      sidebarToggle.classList.remove('ca-gov-close-icon');
      sidebarToggle.classList.add('ca-gov-svg');
      sidebarToggle.ariaLabel = 'Open the CA.gov menu';
      animatedCaGovIcon.style.display = 'block';
    }

    sidebar.style.display =
      sidebar.style.display !== 'block' ? 'block' : 'none';

    if (sidebar.style.display === 'none') {
      document.body.style.overflow = 'auto';
    }
  }

  moreServicesToggle.addEventListener('click', () => {
    if (moreServicesContainer.classList.contains('hidden')) {
      moreServicesContainer.classList.remove('hidden');
      moreServicesToggle.classList.add('hidden');
    } else {
      moreServicesContainer.classList.add('hidden');
    }
  });

  lessServicesToggle.addEventListener('click', () => {
    moreServicesContainer.classList.add('hidden');
    moreServicesToggle.classList.remove('hidden');
  });
});
