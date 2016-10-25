$(document).ready(function() {

  $("#bg-image").owlCarousel({

      navigation : false, // Show next and prev buttons
      pagination: false,
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 2000,
      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

  window.onscroll = function (e) {
    $('#pure-bg').removeClass();
  }

});
