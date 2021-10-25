// The document() needs to be ready before your run (function) which goes in the curly brackets
// Short for Jquery is $
$(document).ready(function () {
  // When the doc is ready, look for burger-menu, and when it is on click run the function
  $(".burger-menu").on("click", function () {
    // find on my page the mobile nav and toggle it. Can also add attribute to it say slow
    $(".mobile-nav").toggle("slow");
  });
});
