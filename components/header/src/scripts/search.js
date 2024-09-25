window.addEventListener('load', () => {
  const searchForm = document.querySelector('#search-form');
  const searchSVG = document.querySelector('header .search-svg');
  const searchInput = document.querySelector('header #search-box');
  const resetInputButton = document.querySelector('.ca-gov-close-icon-small');
  const submitInputButton = document.querySelector('.search-submit-icon');
  const submitButton = document.querySelector('#search-submit');

  // Set appropriate icon if search input has a search term
  const updateSearchBox = () => {
    if (searchInput?.value === '') {
      submitInputButton?.classList.remove('search-submit-icon');
      submitInputButton?.classList.add('search-svg-small-icon');
    } else {
      submitInputButton?.classList.remove('search-svg-small-icon');
      submitInputButton?.classList.add('search-submit-icon');
    }
  };

  // Close search box and hide search term
  const closeSearchBox = () => {
    searchInput?.classList.remove('focus-search-box');
    searchInput.placeholder = '';
    searchInput.style.color = 'transparent';
  };

  // Open search box and display search term
  const openSearchBox = () => {
    searchInput?.classList.add('focus-search-box');
    searchInput.style.color = '#000000';
    searchInput.placeholder = 'Search';
  };

  // Clears search term and resets placeholder text
  const clearSearchBox = () => {
    searchInput.value = '';
    searchInput.placeholder = 'Search';
  };

  if (!searchInput) {
    return;
  }

  // Always keep placeholder text for mobile
  if (window.innerWidth < 1080) {
    searchInput.placeholder = 'Search';
  }

  // Fire update on search box expansion
  searchSVG.addEventListener('click', () => {
    updateSearchBox();
  });

  // Fire update on keyup
  document.addEventListener('keyup', () => {
    updateSearchBox();
  });

  // Clear search term on pressing ESC
  searchForm.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      clearSearchBox();
      updateSearchBox();
    }
  });

  // Keydown behavior for search elements
  // Pressing Enter on the X button:
  // -Desktop = close search box, hide search term
  // -Mobile = clear search term
  // Pressing Enter on the Submit button:
  // Only submit if search term is present
  searchForm.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      if (e.target.id === 'close_search') {
        if (window.innerWidth > 1080) {
          closeSearchBox();
        } else {
          clearSearchBox();
        }
        updateSearchBox();
        e.preventDefault();
        return false;
      }
      if (e.target.id === 'search-submit' && searchInput.value.length > 0) {
        e.preventDefault();
        searchForm.submit();
      }
      if (searchInput.value.length <= 0) {
        e.preventDefault();
        return false;
      } else {
        e.preventDefault();
        searchForm.submit();
      }
    }
  });

  // Close search box and hide search term on desktop click
  // Clear search term on mobile click
  resetInputButton.addEventListener('click', e => {
    if (window.innerWidth > 1080) {
      closeSearchBox();
    } else {
      clearSearchBox();
    }
    updateSearchBox();
    e.preventDefault();
  });

  // Submit form on click only if search term is present
  submitButton.addEventListener('click', e => {
    if (searchInput.value.length <= 0) {
      e.preventDefault();
      return false;
    } else {
      e.preventDefault();
      searchForm.submit();
    }
  });

  // Open search box and set placeholder on magnifying glass icon click
  searchSVG.addEventListener('click', e => {
    updateSearchBox();
    searchInput?.focus();
    if (window.innerWidth > 1080) {
      if (!searchInput.classList.contains('focus-search-box')) {
        openSearchBox();
      }
    }
    e.preventDefault();
  });

  // Open search box and set placeholder on search input focus
  searchInput.addEventListener('focus', () => {
    updateSearchBox();
    searchInput.focus();
    if (window.innerWidth > 1080) {
      openSearchBox();
    }
  });

  // Close search box, remove placeholder, and remove value on search input focusout
  searchInput.addEventListener('focusout', e => {
    if (window.innerWidth > 1080 && e.target?.nodeName !== 'INPUT') {
      closeSearchBox();
    }
  });

  // Close search box, remove placeholder, and remove value on reset button focusout
  resetInputButton.addEventListener('focusout', e => {
    if (window.innerWidth > 1080 && e.relatedTarget?.nodeName !== 'INPUT') {
      closeSearchBox();
    }
  });

  // Close search box, remove placeholder, and remove value on submit button focusout
  submitInputButton.addEventListener('focusout', e => {
    if (window.innerWidth > 1080 && e.relatedTarget?.nodeName !== 'INPUT') {
      closeSearchBox();
    }
  });
});
