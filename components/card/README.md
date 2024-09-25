# `go-site-card`

Card can have multiple layouts depending on data-attributes

Sample usage:

Card with call to action button

```html
<ul class="cards">
  <li>
    <div class="card-text">
      <h2>Grizzly Bear</h2>
      <p>Description</p>
    </div>
    <a class="action" href="">Call to action</a>
    <img
      src="https://live.staticflickr.com/5609/15596534729_9c240ff83a_b.jpg"
      alt="Brown bear" />
  </li>
</ul>
```

Horizontal card with image on left

```html
<ul class="cards" data-orientation="media-" data-action="interactive">
  <li>
    <div class="card-text">
      <h2><a href="#">Card Test 1</a></h2>
      <p>This is only a test.</p>
    </div>
    <img
      src="https://live.staticflickr.com/5609/15596534729_9c240ff83a_b.jpg"
      alt="Brown bear" />
  </li>
</ul>
```

Horizontal card with image on the right

```html
<ul class="cards" data-orientation="media-end" data-action="interactive">
  <li>
    <div class="card-text">
      <h2><a href="#">Card Test 3</a></h2>
      <p>This still is only test.</p>
    </div>
    <img
      src="https://live.staticflickr.com/5609/15596534729_9c240ff83a_b.jpg"
      alt="Brown bear" />
  </li>
</ul>
```

Vertical card with image on top

```html
<ul class="cards" data-action="interactive">
  <li>
    <div class="card-text">
      <h2><a href="#">Card</a></h2>
      <p>
        "Says who?" said Harry, taking off his sneakers and emptying them of
        water. "Hope they hurry up with the Sorting. I'm starving." The Sorting
        of the new students into Houses took place at the start of every school
        year,
      </p>
    </div>
    <img
      src="https://live.staticflickr.com/5609/15596534729_9c240ff83a_b.jpg"
      alt="Brown bear" />
  </li>
  </ul>
```

Card with lots of text and image on right

```html
<ul class="cards" data-orientation="media-end" data-action="interactive">
  <li>
    <div class="card-text">
      <h2><a href="#">Card 2</a></h2>
      <p>
        "Says who?" said Harry, taking off his sneakers and emptying them of
        water. "Hope they hurry up with the Sorting. I'm starving." "Says who?"
        said Harry, taking off his sneakers and emptying them of water. "Hope
        they hurry up with the Sorting. I'm starving." "Says who?" said Harry,
        taking off his sneakers and emptying them of water. "Hope they hurry up
        with the Sorting. I'm starving." "Says who?" said Harry, taking off his
        sneakers and emptying them of water. "Hope they hurry up with the
        Sorting. I'm starving." "Says who?" said Harry, taking off his sneakers
        and emptying them of water. "Hope they hurry up with the Sorting. I'm
        starving." "Says who?" said Harry, taking off his sneakers and emptying
        them of water. "Hope they hurry up with the Sorting. I'm starving."
      </p>
    </div>
    <img
      src="https://live.staticflickr.com/5609/15596534729_9c240ff83a_b.jpg"
      alt="Brown bear" />
  </li>
</ul>
```

Card with lots of text and image on left

```html
<ul class="cards" data-orientation="media-" data-action="interactive">
  <li>
    <div class="card-text">
      <h2><a href="#">Card 2</a></h2>
      <p>
        "Says who?" said Harry, taking off his sneakers and emptying them of
        water. "Hope they hurry up with the Sorting. I'm starving." "Says who?"
        said Harry, taking off his sneakers and emptying them of water. "Hope
        they hurry up with the Sorting. I'm starving." "Says who?" said Harry,
        taking off his sneakers and emptying them of water. "Hope they hurry up
        with the Sorting. I'm starving."
      </p>
    </div>
    <img
      src="https://live.staticflickr.com/8628/16622486169_087756b818_b.jpg"
      alt="California poppy flower" />
  </li>
</ul>
```
