// !!!!! UNE FOIS LE SITE EN LIGNE CHANGER LA CLE API
mapboxgl.accessToken = 'pk.eyJ1IjoibXJiYWJvbiIsImEiOiJjbHB1ODQxcmYwaGJ4MnFxbXQweWF5c3BsIn0.Y2tsLBnartY-XI4sAJuMAA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mrbabon/clpux5wu301cj01qt339degm8', // Style de la carte (modifiable)
    center: [7.0448384, 43.6212658], // Coordonnées du centre de la carte (modifiable)
    zoom: 8 // Niveau de zoom initial (modifiable)
});

map.on('load', function () {
    // Charger les données GeoJSON de la région PACA (exemple)
    var geojson = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [
                        // Insérer ici les coordonnées de la démarcation de la région PACA
                    ]
                }
            }
        ]
    };

    // Ajouter la couche de la démarcation de la région PACA
    map.addLayer({
        'id': 'region-border',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': geojson
        },
        'layout': {},
        'paint': {
            'line-color': '#FF0000', // Rouge
            'line-width': 2
        }
    });
});