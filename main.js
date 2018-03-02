$(function(){

  $(document).scroll(function() {
      let dist = $(document).scrollTop();
      let alpha = (1 - dist/70).clamp(0, 1);
      let alpha2 = (dist/70-1).clamp(0, 1);
      $("#lockup").css("opacity", alpha);
      $("#lockup2").css("opacity", alpha2);
  });

  $(".sketchPre")
    .hover(function() {
      $(".sketchCap").css("opacity", 1);
    })
    .mouseleave(function() {
      $(".sketchCap").css("opacity", 0.5);
    });

  $(".sketchPre").click(function() {
      $(this).replaceWith( "<iframe class='sciSketch sciSpanH3' scrolling='no' src='https://zyyerin.github.io/365--/103/index.html'></iframe>" );
  });

});


Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
