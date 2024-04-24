# `go-site-header`

Header for GO site

```html
<header>
  <nav class="nav">
    <div class="container">
      <div class="logo">
        <figure>
          <a href="https://www.gov.ca.gov/">
            <img
              src="../images/gov-branding.svg"
              alt="Governor Gavin Newsom's Branding: Five pointed star atop the Calfornia Bear with a blue background." />
            <span class="sr-only">Visit Governor Newsom's homepage.</span>
          </a>
        </figure>
      </div>
      <div id="mainListDiv" class="main_list">
        <ul class="navlinks">
          <li><a href="#" class="active">About</a></li>
          <li><a href="">Priorities & Progress</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Join the Administration</a></li>
          <li><a href="">Contact</a></li>
          <li><button class="search-svg"></button></li>
          <li><a id="translate" href="">Translate</a></li>
          <li>
            <button
              id="caGov"
              class="ca-gov-svg"
              title="CA.gov home page"
              aria-description="CA.gov home page"
              tabindex="0"
              onclick="{caGovToggle()}"></button>
          </li>
        </ul>
      </div>
      <span class="navTrigger">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
    <div id="ca_gov_sidebar">
      <p>Official website of the State of California</p>
      <p>CA.gov</p>
      <p>Resources for California</p>
      <hr />
      <div id="key_services">
        <ul>
          <li>Key services</li>
          <li><a href="#">Food stamps</a></li>
          <li><a href="#">Traffic tickets</a></li>
          <li><a href="#">Business licenses</a></li>
          <li><a href="#">Birth certificates</a></li>
          <li><a href="#">Vehicle registration</a></li>
          <li>More services +</li>
        </ul>
      </div>
      <hr />
      <div id="more_services">
        <ul>
          <li>Popular topics</li>
          <li><a href="#">Climate Action</a></li>
          <li><a href="#">Social programs</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Benefits</a></li>
        </ul>
      </div>
      <div id="popular_topics">
        <ul>
          <li>Popular topics</li>
          <li><a href="#">Climate Action</a></li>
          <li><a href="#">Social programs</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Benefits</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<script>
  const caGovToggle = () => {
    const sidebar = document.getElementById("ca_gov_sidebar");
    sidebar.style.display =
    sidebar.style.display !== "block"
    ? (sidebar.style.display = "block")
    : (sidebar.style.display = "none");
  };

  // Function used to shrink nav bar removing paddings
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.querySelector(".nav").classList.add("affix");
      document.querySelector(".ca-gov-svg").classList.add("move-up");
      document.querySelector("#ca_gov_sidebar").classList.add("stretch");
    } else {
      document.querySelector(".nav").classList.remove("affix");
      document.querySelector(".ca-gov-svg").classList.remove("move-up");
      document.querySelector("#ca_gov_sidebar").classList.remove("stretch");
    }
  });

  document.querySelectorAll(".navTrigger").forEach(navTrigger => {
    navTrigger.addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector("#mainListDiv").classList.toggle("show_list");
      document.querySelector("#mainListDiv").style.display = "block";
    });
  });
</script>
```
