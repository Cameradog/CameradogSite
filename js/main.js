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
  $(document).ready(function() {
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['', 'About Me','Personal Expertise and Research', 'My work', 'Contact Me'],

      //scrolling
      loopBottom: true,
      loopTop: true,
      fadingEffect: true,
      keyboardScrolling: true,
      dragAndMove: false,
    });
  });

});
