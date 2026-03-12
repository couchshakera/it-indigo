$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });

});

<div id="wufoo-q1c31xld0et3p5v"> Fill out my <a href="https://sdcouch.wufoo.com/forms/q1c31xld0et3p5v">online form</a>. </div> <script type="text/javascript"> var q1c31xld0et3p5v; (function(d, t) { var s = d.createElement(t), options = { 'userName':'sdcouch', 'formHash':'q1c31xld0et3p5v', 'autoResize':true, 'height':'519', 'async':true, 'host':'wufoo.com', 'header':'show', 'ssl':true }; s.src = ('https:' == d.location.protocol ?'https://':'http://') + 'secure.wufoo.com/scripts/embed/form.js'; s.onload = s.onreadystatechange = function() { var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return; try { q1c31xld0et3p5v = new WufooForm(); q1c31xld0et3p5v.initialize(options); q1c31xld0et3p5v.display(); } catch (e) { } }; var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr); })(document, 'script'); </script>

$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000
})