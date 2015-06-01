//jQuery
$( document ).ready(function() {
  "use strict";

  $("form#addPlace").submit(function(event) {
    event.preventDefault();

    var name = $("input#placeName").val();
    $("input#placeName").val('');
    var newPlace = {name: name, landmarks: []};

    var placesList = $("ul#placesList");
    placesList.append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").last().click(function() {
      reloadPlaceDetails(newPlace);
    });

    var reloadPlaceDetails = function(place) {
      $(".placeDetail").show();
      $(".placeDetail h2").text(place.name);

      $(".placeLocation").show();
      $(".placeLocation span").text(place.location);

      $(".placeLandmarks").show();
      $(".placeLandmarks ul").empty();
      place.landmarks.forEach(function (landmark) {
          $(".placeLandmarks ul").append("<li>" + landmark + "</li>");
      });
    };

    $("form#updatePlace").submit(function(event) {
      event.preventDefault();

      var location = $("input#placeLocation").val();
      if(location !== '') {
        $("input#placeLocation").val('');
        newPlace['location'] = location;
      }

      var landmark = $("input#placeLandmark").val();
      if (landmark !== '') {
        $("input#placeLandmark").val('');

        newPlace.landmarks.push(landmark);
      }

      reloadPlaceDetails(newPlace);

    });

  });



});
