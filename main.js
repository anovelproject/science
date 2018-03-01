$(function(){

  $(document).scroll(function() {
      let dist = $(document).scrollTop();
      let alpha = (1 - dist/70).clamp(0, 1);
      let alpha2 = (dist/70-1).clamp(0, 1);
      $("#lockup").css("opacity", alpha);
      $("#lockup2").css("opacity", alpha2);
  });

});


Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};
