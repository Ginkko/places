//jQuery
$( document ).ready(function() {
  "use strict";

  $("form#addPlace").submit(function(event) {
    event.preventDefault();
    var name = $("input#placeName").val();
    $("input#placeName").val('');
    var placesList = $("ul#placesList");

    placesList.append("<li><span class='linkStyle'>" + name + "</span></li>");

  });

});
