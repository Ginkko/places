//jQuery
$( document ).ready(function() {
  "use strict";

  $("form#addPlace").submit(function(event) {
    event.preventDefault();
    var name = $("input#placeName").val();
    $("input#placeName").val('');
    var newPlace = {name: name};

    var placesList = $("ul#placesList");
    placesList.append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").last().click(function() {
      $(".placeDetail").show();
      $(".placeDetail h2").text(newPlace.name);

    });

  });

});
