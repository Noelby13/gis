var map = L.map('map').setView([12.865416, -85.207229], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Elaborado por: Henry Noel Reyes Duarte'
}).addTo(map);

//agrega una escala
L.control.scale().addTo(map);


var miniMapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 5,
    maxZoom: 13
});

new L.Control.MiniMap(miniMapLayer, {
    toggleDisplay: true,
    minimized: false
}).addTo(map);

//agrega una leyenda
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info-legend');
    div.innerHTML += '<h4>Legenda</h4>';
    div.innerHTML += '<i style="background: #FF5733"></i> <span>Terremoto</span><br>';
    div.innerHTML += '<i style="background: #FF5733"></i> <span>Terremoto</span><br>';
    div.innerHTML += '<i style="background: #FF5733"></i> <span>Terremoto</span><br>';
    return div;
};
legend.addTo(map);

//ubica un minimapa en la esquina inferior derecha
// var miniMap = new L.Control.MiniMap(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'), {
//     toggleDisplay: true,
//     minimized: false
// }).addTo(map);

