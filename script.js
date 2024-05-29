$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var navbarHeight = 70; // Replace with your navbar height
      $('html, body').animate({
        scrollTop: $(hash).offset().top - navbarHeight
      }, 1000, function(){
        // Add hash to URL after scroll (without jumping)
        history.pushState(null, null, hash);
      });
    }
  });
});