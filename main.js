
/* SETUP */
const map = L.map('map',{
    tms: false
}).setView([42.755942, -72.8092041],3);

const PersonIcon = L.Icon.extend({
    options: {
        iconSize: [
            60, 60
        ],
        className: 'circular',
        popupAnchor:  [0, -30],
    }
});

// load up the background tile layer
const Stamen_Watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {}).addTo(map);

// all the facemarkers will go into one layer
const facemarkers = L.layerGroup();

// function to add markers
const addMarker = function(options) {
  var icon = new PersonIcon({iconUrl: options.iconUrl});
  var marker = L.marker(options.lat_long, {icon: icon, url: options.url, name: options.name})
  facemarkers.addLayer(marker.addTo(map).bindPopup(options.message));
}

/* END SETUP */


//
//
// copy the following lines and change then as needed
// look up the lat/long and change that as well.
addMarker({
  name: 'Froggy',
  iconUrl: 'images/froggy.jpg',
  url: 'people/froggy.html',
  message: 'Come visit me in Costa Rica!',
  lat_long: [9.6660971,-85.0621176],
});


/* TODO: Add yourself to the map here! */
// START SECTION FOR MARKERS














//END SECTION FOR MARKERS

/* DO NOT MODIFY BELOW THIS LINE */

// this sets up popups and clicks on all the markers
facemarkers.eachLayer(function(marker) {
  marker.on('mouseover', function (e) {
    e.target.openPopup();
  });
  marker.on('mouseout', function (e) {
    e.target.closePopup();
  });
  marker.on('click', function (e) {
      eModal.ajax({url: e.target.options.url, title: e.target.options.name});
  });
});


// setup the info control layer
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this._div.innerHTML = '<a href="/"><h4>Dartmouth CS52 16X</h4></a>';
    return this._div;
};


info.addTo(map);
