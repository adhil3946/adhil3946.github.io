$(document).ready(function () {
   $('.navbar-toggle').click(function () {
      $(this).toggleClass('active')
   })
   $('.navbar-toggle').click(function () {
      $('.nav-menu').toggleClass('active')
   })
});
$(document).ready(function () {
   // Show or hide the button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.scroll-up').fadeIn();
      } else {
         $('.scroll-up').fadeOut();
      }
   });
   // Scroll to top when button clicked
   $('.scroll-up').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
   });
})