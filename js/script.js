//jQuery
var places = [];
var index = 0;
$( document ).ready(function() {
  "use strict";



  $("#updatePlace").click(function() {

    var location = $("input#placeLocation").val();
    if(location !== '') {
      $("input#placeLocation").val('');
      places[index].location = location
    }
    var landmark = $("input#placeLandmark").val();
    if (landmark !== '') {
      $("input#placeLandmark").val('');
      places[index].landmarks.push(landmark);
    }

    refreshPlace();
  });

  $("form#addPlace").submit(function(event) {
    event.preventDefault();
    var name = $("input#placeName").val();
    $("input#placeName").val('');
    var newPlace = {name: name, landmarks: []};
    index = places.push(newPlace) - 1;
    var placesList = $("ul#placesList");
    placesList.append("<li><span class='place' id='" + index + "'>" + places[index].name + "</span></li>");
  });

  $("#placesList").on('click', '.place', function() {
    index = parseInt($(this).attr('id'));
    refreshPlace();
  });

  var refreshPlace = function() {
    $(".placeLocation").hide();


    var place = places[index];
    $(".placeDetail").show();
    $(".placeDetail h2").text(place.name);

    if (place.location !== undefined) {
      $(".placeLocation").show();
      $(".placeLocation span").text(place.location);
    }

    $(".placeLandmarks").show();
    $(".placeLandmarks ul").empty();
    place.landmarks.forEach(function (landmark) {
      $(".placeLandmarks ul").append("<li>" + landmark + "</li>");
    });
  };

});
