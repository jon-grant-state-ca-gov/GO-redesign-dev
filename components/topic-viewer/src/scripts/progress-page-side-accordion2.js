window.addEventListener("load", () => {
  const spotlightLinks = document.querySelectorAll(".spotlight-select a");
  for (let i = 0; i < spotlightLinks.length; i++) {
    spotlightLinks[i].addEventListener("click", e => {
      spotlightLinks.forEach(link => {
        link.removeAttribute("aria-current");
      });

      e.target.setAttribute("aria-current", "location");
    });
  }
  document.body.classList.add("js-enabled");

  const createSelectFromList = listId => {
    // Find the list element by ID
    const list = document.getElementById("spotlight-list");
    if (!list) {
      console.error("List element not found");
      return;
    }

    // Create a select element
    const select = document.createElement("select");

    // Get all list items
    const items = list.querySelectorAll("li");

    // Iterate through the NodeList
    items.forEach(node => {
      if (node.tagName === "LI") {
        const anchor = node.querySelector("a");
        if (anchor) {
          // Create an <option> element for anchor tags
          const option = document.createElement("option");
          option.value = anchor.href;
          option.textContent = anchor.textContent;
          select.appendChild(option);
        } else {
          // Create an <optgroup> element for non-anchor tags
          const optgroup = document.createElement("optgroup");
          optgroup.label = node.textContent;
          select.appendChild(optgroup);
        }
      }
    });

    // Add an event listener to the select element
    select.addEventListener("change", event => {
      // Update the URL with the value of the selected option
      window.location.href = event.target.value;
    });

    // Find the container
    const container = document.querySelector(".spotlight-list-wrapper > div");
    if (!container) {
      console.error("Container not found");
      return;
    }

    // Append select element to the container
    container.appendChild(select);
  };

  const selectInput = createSelectFromList("myList");
});
