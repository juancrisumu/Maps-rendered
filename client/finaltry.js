Meteor.startup(function () {
    function createMap () {
    var mapOptions = {
      center: new google.maps.LatLng(53.567, 9.944),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
}
google.maps.event.addDomListener(window, 'load', createMap);
});