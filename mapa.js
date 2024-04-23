// var map = L.map('map').setView([12.865416, -85.207229], 8);

// // Capa principal de mosaicos
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Elaborado por: Henry Noel Reyes Duarte'
// }).addTo(map);

// // Agrega una escala
// L.control.scale().addTo(map);

// // Mini mapa en la esquina
// var miniMapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     minZoom: 5,
//     maxZoom: 13
// });

// new L.Control.MiniMap(miniMapLayer, {
//     toggleDisplay: true,
//     minimized: false
// }).addTo(map);

// // Agrega una leyenda
// // var legend = L.control({position: 'bottomright'});
// // legend.onAdd = function (map) {
// //     var div = L.DomUtil.create('div', 'info-legend');
// //     div.innerHTML += '<h4>Legenda</h4>';
// //     div.innerHTML += '<i style="background: #FF5733"></i> <span>Terremoto</span><br>';
// //     return div;
// // };
// // legend.addTo(map);

// var legend = L.control({position: 'bottomright'});
// legend.onAdd = function (map) {
//     var div = L.DomUtil.create('div', 'info-legend');
//     div.innerHTML += '<h4>Leyenda</h4>';
//     div.innerHTML += '<i style="background: #4477AA"></i> <span>Madrid</span><br>';
//     return div;
// };
// legend.addTo(map);

// // Función para manejar cada feature individual en GeoJSON
// function onEachFeature(feature, layer) {
//     layer.on('click', function(e) {
//         var content = "<h4>Información del Lugar</h4>";
//         if (feature.properties) {
//             content += "Municipio: " + feature.properties.N_MUNIC + "<br>";
//             content += "Departamento: " + feature.properties.N_DEPTO + "<br>";
//             content += "Población: " + feature.properties.POB + "<br>";
//             content += "Área: " + feature.properties.AREA + " m²<br>";
//             content += "Densidad de población: " + feature.properties.DENS_POB + " hab/km²<br>";
//         }
//         layer.bindPopup(content).openPopup();
//     });
// }

// // Carga y procesa el archivo GeoJSON
// fetch('madrid.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         L.geoJSON(data, {
//             onEachFeature: onEachFeature
//         }).addTo(map);
//     })
//     .catch(function(error) {
//         console.log('Error:', error);
//     });

///////
// var map = L.map('map').setView([12.865416, -85.207229], 8);

// // Capa principal de mosaicos
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Elaborado por: Henry Noel Reyes Duarte'
// }).addTo(map);

// // Agrega una escala
// L.control.scale().addTo(map);

// // Mini mapa en la esquina
// var miniMapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     minZoom: 5,
//     maxZoom: 13
// });

// new L.Control.MiniMap(miniMapLayer, {
//     toggleDisplay: true,
//     minimized: false
// }).addTo(map);

// // Definición de colores para las features
// function stringToColor(str) {
//     var hash = 0;
//     for (var i = 0; i < str.length; i++) {
//         hash = str.charCodeAt(i) + ((hash << 5) - hash);
//     }
//     var color = '#';
//     for (var i = 0; i < 3; i++) {
//         var value = (hash >> (i * 8)) & 0xFF;
//         color += ('00' + value.toString(16)).substr(-2);
//     }
//     return color;
// }

// // Aplica color basado en el nombre del municipio
// function style(feature) {
//     return {
//         color: '#000', // Color del borde
//         fillColor: stringToColor(feature.properties.N_MUNIC), // Genera color del nombre del municipio
//         fillOpacity: 0.5,
//         weight: 2
//     };
// }

// function getColor(id) {
//     return colors[id] || '#FF5733'; // Color por defecto
// }

// // Controlador para cada feature
// function onEachFeature(feature, layer) {
//     layer.on('click', function(e) {
//         var content = "<h4>Información del Lugar</h4>" +
//             "Municipio: " + feature.properties.N_MUNIC + "<br>" +
//             "Departamento: " + feature.properties.N_DEPTO + "<br>" +
//             "Población: " + feature.properties.POB + "<br>" +
//             "Área: " + feature.properties.AREA + " km²<br>" +
//             "Densidad de población: " + feature.properties.DENS_POB + " hab/km²<br>";
//         layer.bindPopup(content).openPopup();
//     });
// }

// // Agrega la capa GeoJSON con estilo personalizado
// fetch('madrid.json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         L.geoJSON(data, {
//             style: function(feature) {
//                 return {
//                     color: '#000', // Borde negro
//                     fillColor: getColor(feature.properties.id), // Color de fondo basado en la propiedad 'id'
//                     fillOpacity: 0.5,
//                     weight: 2
//                 };
//             },
//             onEachFeature: onEachFeature
//         }).addTo(map);
//     })
//     .catch(function(error) {
//         console.log('Error:', error);
//     });

// // Agrega una leyenda
// var legend = L.control({position: 'bottomright'});
// legend.onAdd = function (map) {
//     var div = L.DomUtil.create('div', 'info-legend');
//     div.innerHTML += '<h4>Leyenda</h4>';
//     for (var id in colors) {
//         div.innerHTML += '<i style="background:' + colors[id] + ';"></i> <span>Feature ' + id + '</span><br>';
//     }
//     return div;
// };
// legend.addTo(map);
////////

var map = L.map("map").setView([12.865416, -85.207229], 8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Elaborado por: Henry Noel Reyes Duarte',
}).addTo(map);

L.control.scale().addTo(map);

var miniMapLayer = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    minZoom: 5,
    maxZoom: 13,
  }
);

new L.Control.MiniMap(miniMapLayer, {
  toggleDisplay: true,
  minimized: false,
}).addTo(map);

//Funcion que permite generar un color unico en base a los nombres de los municipios
function stringToColor(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
}

var municipalityColors = {}; // Almacena los colores para uso en la leyenda

// Estilización de las features/entidades basado en el nombre del municipio

function style(feature) {
  var color = stringToColor(feature.properties.N_MUNIC);
  municipalityColors[feature.properties.N_MUNIC] = color; // Guarda el color para la leyenda
  return {
    color: "#000000", // Borde negro
    fillColor: color,
    fillOpacity: 0.5,
    weight: 2,
  };
}

function onEachFeature(feature, layer) {
  layer.on("click", function (e) {
    var content =
      "<h4>Información del Lugar</h4>" +
      "Municipio: " +
      feature.properties.N_MUNIC +
      "<br>" +
      "Departamento: " +
      feature.properties.N_DEPTO +
      "<br>" +
      "Población: " +
      feature.properties.POB +
      "<br>" +
      "Área: " +
      feature.properties.AREA +
      " km²<br>" +
      "Densidad de población: " +
      feature.properties.DENS_POB +
      " hab/km²<br>";
    layer.bindPopup(content).openPopup();
  });
}

// Agrega un geojson
fetch("madrid.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    L.geoJSON(data, {
      style: style,
      onEachFeature: onEachFeature,
    }).addTo(map);
    createLegend();
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

function createLegend() {
  var legendContent = "<h4>Leyenda</h4>";
  legendContent += '<i style="background:#000000;"></i> Frontera Municipal<br>';

  Object.keys(municipalityColors).forEach(function (municipality) {
    legendContent += `<i style="background:${municipalityColors[municipality]};"></i> ${municipality}<br>`;
  });

  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info-legend");
    div.id = "legend";
    div.innerHTML = legendContent; // Inicial contenido de la leyenda
    return div;
  };
  legend.addTo(map);
}

// var legend = L.control({ position: "bottomright" });
// legend.onAdd = function (map) {
//   var div = L.DomUtil.create("div", "info-legend");
//   div.id = "legend";
//   div.innerHTML = "<h4>Leyenda</h4>"; // Inicial contenido de la leyenda
//   return div;
// };
// legend.addTo(map);

//Documentacion
//https://gis.stackexchange.com/questions/243831/how-to-use-oneachfeature-in-leaflet-js-map
//https://leafletjs.com/examples/choropleth/
