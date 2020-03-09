$().ready(function() {
  $(".burger-menu-button").click(function() {
    $(this).toggleClass("burger-menu-button-active");
    $(".burger-menu").toggleClass("burger-menu-active");
  });
});
