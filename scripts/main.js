$().ready(function() {
  $("#scrollDown").on("click", function(event) {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#aboutUs").offset().top
        },
        500,
        "easeOutSine"
      );
    event.preventDefault();
  });
});
