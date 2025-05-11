// Load required ArcGIS modules
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer"
], function(Map, MapView, Graphic, GraphicsLayer) {

  // Initialize the map with a topographic basemap
  const map = new Map({
    basemap: "topo"
  });
  // Create and center the map view over the western U.S.
  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-110, 39], // Centered over western US
    zoom: 5
  });
  // Create separate graphics layers for ski resorts and bike trails
  const skiLayer = new GraphicsLayer();
  const bikeLayer = new GraphicsLayer();
  map.addMany([skiLayer, bikeLayer]);  // Add both layers to the map
  // Define data for 20 famous ski resorts
const skiResorts = [
    { name: "Vail", coords: [-106.3742, 39.6403], info: "Famous for its large ski area and upscale resorts." },
    { name: "Aspen", coords: [-106.8227, 39.1911], info: "Known for its celebrity visitors and luxury accommodations." },
    { name: "Park City", coords: [-111.4970, 40.6461], info: "Host of the Sundance Film Festival, great skiing too." },
    { name: "Jackson Hole", coords: [-110.8625, 43.5875], info: "Renowned for its steep slopes and wildlife viewing." },
    { name: "Big Sky", coords: [-111.3686, 45.2841], info: "Known for its wide-open terrain and stunning views." },
    { name: "Lake Tahoe - Heavenly", coords: [-119.9390, 38.9358], info: "Located on the California-Nevada border with scenic lake views." },
    { name: "Mammoth Mountain", coords: [-118.9721, 37.6308], info: "A popular California resort with over 3,500 acres of terrain." },
    { name: "Snowbird", coords: [-111.6532, 40.5822], info: "An iconic resort in the Wasatch Mountains near Salt Lake City." },
    { name: "Breckenridge", coords: [-106.0433, 39.4817], info: "Known for its charming Victorian town and fantastic ski conditions." },
    { name: "Telluride", coords: [-107.8123, 37.9375], info: "A picturesque resort town with a rich history and world-class skiing." },
    { name: "Sun Valley", coords: [-114.3550, 43.6950], info: "Famous for its European-style village and excellent skiing." },
    { name: "Steamboat", coords: [-106.8317, 40.4840], info: "Known for its 'champagne powder' snow and family-friendly atmosphere." },
    { name: "Taos", coords: [-105.4544, 36.5962], info: "A hidden gem in New Mexico with great terrain and culture." },
    { name: "Whitefish", coords: [-114.3465, 48.4767], info: "A scenic resort in Montana with beautiful views of Glacier National Park." },
    { name: "Mt. Bachelor", coords: [-121.6887, 43.9793], info: "Located in Oregon, known for its excellent snow conditions and remote beauty." },
    { name: "Killington", coords: [-72.7961, 43.6262], info: "The largest resort in the eastern U.S., famous for its long ski season." },
    { name: "Stowe", coords: [-72.7145, 44.4654], info: "A charming resort in Vermont, known for its picturesque slopes." },
    { name: "Sugarloaf", coords: [-70.3081, 45.0313], info: "Maine's largest ski area, offering a variety of trails for all skill levels." },
    { name: "Snowshoe", coords: [-79.9970, 38.4125], info: "A popular resort in West Virginia with challenging terrain and excellent snow." },
    { name: "Mount Snow", coords: [-72.8961, 42.9606], info: "Known for its extensive snowmaking and great terrain parks." }
  ];
  // Add ski resort points to the skiLayer with blue markers and popup info
  skiResorts.forEach(resort => {
    const graphic = new Graphic({
      geometry: {
        type: "point",
        longitude: resort.coords[0],
        latitude: resort.coords[1]
      },
      symbol: {
        type: "simple-marker",
        color: "blue",
        outline: { color: "white", width: 1 }
      },
      attributes: resort,
      popupTemplate: {
        title: resort.name,
        content: resort.info
      }
    });
    skiLayer.add(graphic);
  });
  // Define 10 famous mountain bike trail locations
  const bikeTrails = [
    { name: "Moab - Slickrock Trail", coords: [-109.5110, 38.5733], info: "One of the most famous mountain biking trails in the world." },
    { name: "Bentonville Trails", coords: [-94.2088, 36.3729], info: "World-class trails with flowy, machine-built tracks." },
    { name: "Downieville Downhill", coords: [-120.8276, 39.5591], info: "A classic California trail with a 5,000 ft descent." },
    { name: "Whistler Bike Park", coords: [-122.9580, 50.1163], info: "Top-rated downhill park in British Columbia, Canada." },
    { name: "Crested Butte", coords: [-107.0066, 38.8697], info: "Over 750 miles of singletrack in Colorado." },
    { name: "Pisgah National Forest", coords: [-82.7035, 35.6815], info: "Rooty, rocky trails in North Carolina’s backcountry." },
    { name: "Kingdom Trails", coords: [-72.0646, 44.5646], info: "Flowy network in Vermont." },
    { name: "Sun Valley Trails", coords: [-114.3486, 43.6950], info: "Over 400 miles of trails for all levels." },
    { name: "Tahoe Rim Trail", coords: [-119.9402, 39.0968], info: "Epic alpine riding with views of Lake Tahoe." },
    { name: "Sedona MTB Trails", coords: [-111.7633, 34.8697], info: "Technical red rock trails and beautiful desert scenery." }
  ];
  // Add bike trail points to the bikeLayer with red markers and popup info
  bikeTrails.forEach(trail => {
    const graphic = new Graphic({
      geometry: {
        type: "point",
        longitude: trail.coords[0],
        latitude: trail.coords[1]
      },
      symbol: {
        type: "simple-marker",
        color: "red",
        outline: { color: "white", width: 1 }
      },
      attributes: trail,
      popupTemplate: {
        title: trail.name,
        content: trail.info
      }
    });
    bikeLayer.add(graphic);
  });

  // Toggle layer visibility
  // Add event listener to toggle ski resort visibility using checkbox
  document.getElementById("skiToggle").addEventListener("change", function (e) {
    skiLayer.visible = e.target.checked;
  });
  // Add event listener to toggle bike trail visibility using checkbox
  document.getElementById("bikeToggle").addEventListener("change", function (e) {
    bikeLayer.visible = e.target.checked;
  });

});