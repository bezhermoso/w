(function ($) {
  "use strict";

  $(document).foundation();

  var weddingDate = new Date(Date.UTC(2016, 3, 10, 22, 0, 0)),
  $days = $('.days'),
  $hours = $('.hours'),
  $minutes = $('.minutes'),
  $seconds = $('.seconds');

  var updateDate = function () {
    var now = new Date(),
    diff = weddingDate - now,
    totalSeconds = Math.floor(diff / 1000);

    var days = Math.floor(totalSeconds / 86400);
    totalSeconds -= days * 86400;

    var hours = Math.floor(totalSeconds / 3600) % 24;
    totalSeconds -= hours * 3600;

    var minutes = Math.floor(totalSeconds / 60) % 60;
    totalSeconds -= minutes * 60;

    var seconds = totalSeconds % 60;

    $days.text(days);
    $hours.text(hours);
    $minutes.text(minutes);
    $seconds.text(seconds);
  };

  updateDate();
  setInterval(updateDate, 1000);

  if (!Cookies.get("naia")) {
    $("#naia-notice").show();
    $(".dismiss-naia").click(function () {
      Cookies.set("naia", 1);
      $("#naia-notice").remove();
    });
  }

  var checkScrollTop = function () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos) {
      $('.nav-wrapper').removeClass('transparent');
    } else {
      $('.nav-wrapper').addClass('transparent');
    }
  }

  checkScrollTop();
  $(window).scroll(checkScrollTop);

  $("[data-slow-scroll]").click(function (e) {
    e.preventDefault();
    var $elem = $(this);
    var selector = $elem.data("slow-scroll") || $elem.attr("href");
    var $target = $(selector);
    var position = $target.position();
    var margin = 120;
    var scrollTo = position.top - margin;
    $("html, body").animate({
      scrollTop: scrollTo 
    });
  });


})(jQuery);
