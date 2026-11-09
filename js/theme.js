(function ($) {
  'use strict';

  // Preloader
  var prealoaderOption = $(window);
  prealoaderOption.on("load", function () {
    var preloader = jQuery('.preloader');
    preloader.delay(250).fadeOut('slow');
  });

  // Back to top
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('#scroll').fadeIn();
      } else {
        $('#scroll').fadeOut();
      }
    });
    $('#scroll').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  
})(window.jQuery);



