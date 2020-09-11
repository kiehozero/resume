function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
            center: {
                lat: 53.000001,
                lng: -5.934766
            }
        });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 53.771963, lng: -2.688759}, 
        {lat: 53.568498, lng: -2.938022},
        {lat: 53.337334, lng: -6.257684},
        {lat: 52.850788, lng: -9.203393}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}