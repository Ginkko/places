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
      $(".placeDetail").show();
      $(".placeDetail h2").text(newPlace.name);

      $("form#updatePlace").submit(function(event) {
        event.preventDefault();

        var location = $("input#placeLocation").val();
        if(location !== '') {
          $("input#placeLocation").val('');
          newPlace['location'] = location;
          $(".placeLocation").show();
          $(".placeLocation span").text(newPlace.location);
        }

        var landmark = $("input#placeLandmark").val();
        if (landmark !== '') {
          $("input#placeLandmark").val('');

          newPlace.landmarks.push(landmark);
          $(".placeLandmarks").show();
          $(".placeLandmarks ul").empty();
          newPlace.landmarks.forEach(function (landmark) {
              $(".placeLandmarks ul").append("<li>" + landmark + "</li>");
          });
        }

      });

    });

  });



});
