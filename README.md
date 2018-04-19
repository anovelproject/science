# science.af

# to make a new post on home page

A simple post structure looks like this:

```
<section class="post">
    <h2 class="postTitle">[ title of the post]</h2>

    <div class="postSection sciGrid">

      <h3 class="sciSpanH6">section 1</h3>
       <div class="sciSpanH3">
         <p>[ a paragraph ]</p>
      </div>

      <h3 class="sciSpanH6">section 2</h3>
       <div class="sciSpanH3">
         <p>[ a paragraph ]</p>
      </div>

    </div>

</section>
```

To include an image:

```
<img class="sciSpanH3" src="images/post[ # of this post ]/[ file name ]" alt="[ description of the image ]">
```

To include a sketch file:

```
<div class="sciSpanH3 sketchPre">
  <img src="images/post[ # of this post ]/[ preview image ]" alt="[ description of the sketch ]">
  <div class="sketchCap">- click to explore -</div>
</div>
```

# to make a new ARX experiment

Use this structure:

```
<section class="post">
    <div class="postMain">
      <div class="postSection sciGrid">

        <h2 class="sciSpanH5">[ title of the experiment]</h2>

          <h3>ARX&nbsp;#000</h3>
          <div class="sciSpanH3">
            <p>[ description of the experiment ]</p>
          </div>

          <iframe class="sciSpanH3 sciVideo" src="https://player.vimeo.com/video/000000000" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div><!-- .postMain -->
</section><!-- .post -->
```
