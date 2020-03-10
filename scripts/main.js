$().ready(function() {
  $(".burger-menu-button").click(function() {
    $(this).toggleClass("burger-menu-button-active");
    $(".burger-menu").toggleClass("burger-menu-active");
  });
  let map_icon =
    '<div class="map-label"></div><div class="map-label__icon"><svg class="map-label__svg"><use xlink:href="images/sprite.svg#map"></use></svg></div><div class="map-label__text">Смотреть карту территорий</div>';
  $(".card").each(function() {
    if ($(this).hasClass("card-map-icon")) {
      $(this).append(map_icon);
    }
  });
  $(".map-label").hover(
    function() {
      $(this).css("width", "80%");
      $(this)
        .parent()
        .find(".map-label__text")
        .css("left", "55px");
    },
    function() {
      $(this)
        .parent()
        .find(".map-label__text")
        .css("left", "-100%");
      $(this).css("width", 55);
    }
  );
});
