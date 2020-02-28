var KasselLonLat = [9.55, 51.31];
var KasselWebMercator = ol.proj.fromLonLat(KasselLonLat);

var osm = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var cycle = new ol.layer.Tile({
    source: new ol.source.OSM({
        "url" : "http://tile2.opencyclemap.org/transport/{z}/{x}/{y}.png"
    })
})


var electroHH = new ol.layer.Tile({
source: new ol.source.TileWMS({
  url: 'http://geodienste.hamburg.de/HH_WMS_EMobility?',
  params: {
      "LAYERS":"stromnetz_emobility",
      "TILED": "true",
    }
})
});

var map = new ol.Map({
controls: ol.control.defaults({zoom: false}),
layers: [osm,],
target: 'map',
view: new ol.View({
  center: KasselWebMercator,
  zoom: 14
})
});