/* global google:ignore */

// 1. Get user’s location.
// 2. Render a Google map.
// 3. Center Google Maps on user’s location
// 4. Create request to TFL for bike information.
// 5. Parse API response and add locations to map.
// 6. Create an information window for when a user selects a bike point

let map = null;
let infoWindow = null;
let lat = null;
let lng = null;

const mapElement = document.getElementById('map');

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      initMap();
    },
    function (err) {
      console.log(err);
    },
  );
}

// Render a google map:
function initMap() {
  const latLng = { lat, lng };

  // use the google api to create a map:
  map = new google.maps.Map(mapElement, {
    zoom: 14,
    center: latLng,
  });

  getBikeData();
}

function getBikeData() {
  fetch('https://api.tfl.gov.uk/bikepoint')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((bikepoints) => {
      bikepoints.forEach(addBikeMarker);
    });
}

function addBikeMarker(bikepoint) {
  const bikePointLocation = { lat: bikepoint.lat, lng: bikepoint.lon };
  const marker = new google.maps.Marker({
    position: bikePointLocation,
    map: map,
  });
}
