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

      $("form#updatePlace").submit(function(event) {
        event.preventDefault();
        var location = $("input#placeLocation").val();
        $("input#placeLocation").val('');

        newPlace['location'] = location;
        $(".placeLocation").show();
        $(".placeLocation span").text(newPlace.location);
      });

    });

  });



});
