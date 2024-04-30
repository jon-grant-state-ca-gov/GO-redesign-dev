# `go-site-header`

Header for GO site

```html
<!-- Header -->
<header>
  <!-- Mobile -->
  <div class="mobile">
    <button class="nav-toggle" aria-expanded="false">
      <svg
        width="2rem"
        viewBox="0 0 936 569"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M907.6 560.88C901.18 561 836.95 560.73 822.42 560.88C811.65 558.41 826.44 536.75 840.85 531.19C855.68 525.46 876.33 537.96 877.64 528.84C875.76 512.95 811.89 508.6 790.72 496.74C780.43 487.28 769.93 450.58 764.99 450.63C760.01 450.96 707.38 524.09 698.75 528.81C688.14 533.5 681.82 535.64 678.48 540.08C675.53 546.61 680.74 567.93 674.03 568.61C639.23 568.89 564.23 568.65 560.08 568.61C550.06 563.5 560.55 546.87 573.47 542.4C595.91 534.65 610.36 545.95 612.38 543.79C618.76 539.82 590.84 463 616.18 423.89C615.36 420.82 609.32 416.79 606.25 415.94C595.23 431.92 547.6 434.52 513.02 427.85C515.29 443.72 540.23 480.86 537.05 499.71C531.45 517.57 499.7 560.7 495.54 560.7C495.54 560.7 426.1 560.68 420.19 560.68C416.47 557.68 425.56 543.56 430.04 539.64C444.7 526.36 466.11 546.77 472.05 523.96C474.3 515.9 464.36 505.01 440.06 487.19C422.88 474.59 403.65 452.73 399.58 453.95C365.73 493.87 329.05 517.48 302.62 528.11C279.16 540.34 257.04 569.04 255.16 568.61C255.16 568.61 150.73 569.02 145.36 568.61C137.19 563.59 159.55 542.54 169.1 538.91C179.16 535.08 200.92 546.49 209.99 540.26C219.49 533.6 220.38 499.35 251.8 467.98C257.99 461.74 254.11 417.62 272.08 384.77C261.33 379.63 243.16 383.33 230.26 389.32C212.54 397.54 208.57 425.18 179.44 431.21C157.36 433.49 140.92 424.24 134.48 424.39C124.05 425.56 76.38 435.02 54.09 435.02C37.89 430.69 -0.440015 398.63 1.75999 392.8C5.21999 386.07 41.58 356.27 48.31 339.41C50.79 333.19 47.24 317.76 50.42 311.86C58.14 297.53 78.46 276.74 84.6 268.33C88.71 263.13 79.59 247.64 96.71 238.13C112.85 231.01 119.46 240.84 123.62 242.54C123.65 236.84 122.49 224.97 138.17 218.33C153.29 214.58 164.63 230.45 165.51 233.79C172.71 228.9 189.85 200.4 214.05 192.21C216.13 191.51 220.64 191.52 222.73 190.85C232.37 184.59 266.33 169.74 276.82 163.85C292.12 155.26 333.39 128.21 351.01 126.02C384.3 121.89 447.73 157.76 462.22 158.53C476.71 159.3 569.4 144.56 606.25 146.31C721.91 148.7 805.06 186.99 834.07 232.04C839 234.12 850.08 237.02 853.39 241.21C858.99 248.31 868.75 259.17 861.76 280.53C878.01 295.65 896.53 343.27 897.6 366.55C897.95 396.58 900.92 427.5 903.8 442.98C908.22 466.71 938.77 483.78 935.61 496.35C913.83 540.95 917.52 561.04 907.6 560.92V560.88Z"
          fill="#1B499B" />
        <path
          d="M158.39 184.56C141.11 172.25 106.15 147.2 105.62 146.81C98.8 141.83 98.83 141.87 92.06 146.78C75.26 158.99 40.42 184.55 39.08 184.13C39.08 179.49 53.29 135.66 59.08 118.18C60.22 114.75 58.98 113.55 56.77 111.96C38.68 98.91 1.59 71.92 0 70.47C8.87 70.47 55.5 69.42 71.14 69.68C73.25 69.72 74.85 69.58 75.63 67.11C82.72 44.76 89.91 22.44 97.1 0C99.29 1.15 114.04 45.69 120.44 66.05C121.58 69.69 123.39 69.68 126.12 69.68C149.09 69.65 172.05 69.66 195.27 69.66C194.54 72.83 142.55 109.79 139.55 111.95C136.94 113.83 136.75 115.01 137.69 117.86C144.18 137.68 159.41 181.36 158.38 184.55L158.39 184.56Z"
          fill="#1B499B" />
      </svg>
      <svg class="menu-icon" focusable="false" viewBox="0 0 32 32">
        <path d="M3,10 30,10 M3,20 30,20"></path>
      </svg>
    </button>
  </div>
  <!-- Site Logo -->
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
  <!-- Navigation -->
  <div class="navigation">
    <nav>
      <ul class="navlinks">
        <li><a href="#" class="active">About</a></li>
        <li><a href="">Priorities & Progress</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Join the Administration</a></li>
        <li><a href="">Contact</a></li>
        <!-- Search -->
        <li class="search">
          <form
            class="search-container"
            action="search"
            id="search-form"
            autocomplete="off">
            <input id="search-box" type="text" class="search-box" name="q" />
            <label for="search-box" class="search-svg">
              <span class="sr-only">Search</span>
            </label>
            <input type="submit" id="search-submit" />
          </form>
        </li>
        <!-- Google Translate -->
        <li><a id="translate" href="">Translate</a></li>
      </ul>
    </nav>
  </div>
  <!-- BEGIN CAgov Offical  -->
  <div class="cagov">
    <a
      id="caGov"
      class="ca-gov-svg"
      title="CA.gov home page"
      aria-description="CA.gov home page"
      tabindex="0">
    </a>
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
  <!-- END CAgov Offical -->
</header>
```
