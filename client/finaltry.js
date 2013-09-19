Session.setDefault('map_added', false);

Template.map.rendered = function () {
    if (! (Session.get('map_added'))) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAAZe9Y3TRXFMI2Zj-i59NcA2P5IYAtZjQ&sensor=false&callback=initializeHome";
      document.body.appendChild(script);
      Session.set('map_added', true);
    }
}

initializeHome = function() {
  try { 
    google.maps.visualRefresh = true;
  var mapOptions = {
    center: new google.maps.LatLng(53.567, 9.944),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  google.maps.event.addListener(map, 'titlesloaded', function() {
    console.log("Titles loaded");
    Session.set("map_initialized", true);
  });
}
catch(e) {
  console.log(e);
}
}