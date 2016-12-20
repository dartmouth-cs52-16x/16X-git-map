
/* SETUP */
var map = L.map('map',{
    tms: false
}).setView([42.755942, -72.8092041],3);

var PersonIcon = L.Icon.extend({
    options: {
        iconSize: [
            60, 60
        ],
        className: 'circular',
        popupAnchor:  [0, -30],
    }
});

// load up the background tile layer
var Stamen_Watercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {}).addTo(map);

// all the facemarkers will go into one layer
var facemarkers = L.layerGroup();

// function to add markers
var addMarker = function(options) {
  var icon = new PersonIcon({iconUrl: options.iconUrl});
  var marker = L.marker(options.lat_long, {icon: icon, url: options.url, name: options.name})
  facemarkers.addLayer(marker.addTo(map).bindPopup(options.message));
}



/* END SETUP */

// START SECTION FOR MARKERS
/* TODO: Add yourself to the map here! */
//
// copy the following lines and change then as needed
// look up the lat/long and change that as well.


addMarker({
  name: 'Froggy',
  iconUrl: 'images/froggy.jpg',
  url: '//giphy.com/embed/QCpqmkDHVNde',
  message: 'Come visit me in Costa Rica!',
  lat_long: [9.6660971,-85.0621176],
});


addMarker({
  name: 'Tim',
  iconUrl: 'images/tim_round.jpg',
  url: '//www.zingweb.com',
  message: 'Hiking in the High Sierras!',
  lat_long: [37.2320967,-118.8578716],
});

addMarker({
  name: 'Kate',
  iconUrl: 'images/kate.jpg',
  url: 'images/kate-page.pdf',
  message: 'I love snow!',
  lat_long: [44.227173,-71.747907],
});

addMarker({
  name: 'Theo',
  iconUrl: 'images/Theo.jpg',
  url: 'images/TheoSite.pdf',
  message: 'I like poptarts!',
  lat_long: [42.373616,-71.109734],
});

addMarker({
  name: 'Lillian',
  iconUrl: 'images/lillian.jpg',
  url: '//www.zhaolillian.com/about-me-dali',
  message: 'MIA in Argentina',
  lat_long: [37.5483,-121.9886],
});

addMarker({
  name: 'Luisa',
  iconUrl: 'images/luisa.jpg',
  url: '//www.vluisa.github.io/mapWebsite/',
  message: 'I was born here!',
  lat_long: [4.444676,-75.242438],
});


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
      eModal.iframe({url: e.target.options.url, title: e.target.options.name, size: 'lg'});
  });
});


// setup the info control layer
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this._div.innerHTML = '<a href="/"><h4>DALI 17W</h4></a><p><a href="https://github.com/dali-lab/17W-mappy">code on github</p></a>';
    return this._div;
};


info.addTo(map);
