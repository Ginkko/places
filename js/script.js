//jQuery
$( document ).ready(function() {
  "use strict";

  $("form#addPlace").submit(function(event) {
    event.preventDefault();
    debugger;
    var name = $("input#placeName").val();

    var placesList = $("ul#placesList");
    placesList.empty();
    placesList.append("<li><span class='linkStyle'>" + name + "</span></li>");

  });

});
