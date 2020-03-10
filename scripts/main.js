$().ready(function() {
  $(".burger-menu-button").click(function() {
    $(this).toggleClass("burger-menu-button-active");
    $(".burger-menu").toggleClass("burger-menu-active");
  });
  let small_icon =
    "<svg class='card__icon'> <use xlink:href='images/sprite.svg#map'></use></svg>";

  $(".services__card").each(function() {
    if ($(this).hasClass("services__card-icon_small")) {
      $(this).append(small_icon);
    }
  });
});
