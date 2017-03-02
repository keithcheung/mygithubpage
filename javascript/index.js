$(document).ready(function() {
  var name = function () {

    $(".name").typed({
      strings: ["Keith Cheung"],
      typeSpeed: 100
    });

  }
  var description = function () {
    $(".description").typed({
      strings:[" THINKER / LEARNER / DEVELOPER"],
      typeSpeed: 20
    });
  };
  var a = function() {

    $(".about-description").typed({
      strings: ["about"],
      typeSpeed: 30
    });
  };

  var b = function() {

    $(".project").typed({
      strings: ["projects"],
      typeSpeed: 30
    });
  };
  var d = function () {
    $(".blog").typed({
      strings:["blog"],
      typeSpeed: 30
    });
  };
  var c = function() {

    $(".contact").typed({
      strings: ["contact"],
      typeSpeed: 30
    });

  };
  var animate = function() {
    $('.animated').addClass('swing');
  };
  function myFunction() {
    name();
    setTimeout(description, 2000);
    setTimeout(a, 4000);
    setTimeout(d, 4500);
    setTimeout(b, 4900);
    setTimeout(c, 5500);
    setTimeout(animate, 6300);
  }
  myFunction();
});