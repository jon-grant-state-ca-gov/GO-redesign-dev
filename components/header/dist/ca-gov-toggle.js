window.addEventListener("load", () => {
  const sidebarToggle = document.querySelector("header #caGov");
  const sidebar = document.getElementById("ca_gov_sidebar");

  if (!sidebar || !sidebarToggle) return;

  sidebarToggle.addEventListener("click", () => {
    if (sidebarToggle.classList.contains("ca-gov-svg")) {
      sidebarToggle.classList.add("ca-gov-close-icon");
      sidebarToggle.classList.remove("ca-gov-svg");
    } else {
      sidebarToggle.classList.remove("ca-gov-close-icon");
      sidebarToggle.classList.add("ca-gov-svg");
    }
    sidebar.style.display =
      sidebar.style.display !== "block" ? "block" : "none";
  });
});
