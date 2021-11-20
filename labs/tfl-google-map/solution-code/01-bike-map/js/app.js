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

// 1. Get user’s location.
// check if navigator geolocation is available from the browser
if (navigator.geolocation) {
  // if it is use the getCurrentPosition method to retrieve the Window's location
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    initMap();
  });

  // 2. Render a Google map.
  function initMap() {
    // 3. Center Google Maps on user’s location
    const latLng = { lat, lng };
    // const latLng = { lat: 51.515213, lng: -0.072557 }; // Use these lat and lng values if you are not in London 51.515454,
    // create map using google maps API:
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: latLng,
    });

    getBikeData();
  }

  // 4. Create request to TFL for bike information.
  function getBikeData() {
    $.get('https://api.tfl.gov.uk/bikepoint').done((bikePoints) => {
      bikePoints.forEach(addMarkerForBikePoint);
    });
  }

  // 5. Parse API response and add locations to map.
  function addMarkerForBikePoint(bikePoint) {
    // BONUS
    // const icon = {
    //   url: 'images/blue-marker.jpg',
    //   scaledSize: new google.maps.Size(32, 32),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(0, 0),
    // };

    const bikePointLocation = { lat: bikePoint.lat, lng: bikePoint.lon };
    const marker = new google.maps.Marker({
      position: bikePointLocation,
      map: map,
      // icon,
    });

    // 6. Create an information window for when a user selects a bike point
    const numberOfBikes = bikePoint.additionalProperties.find((obj) => {
      return obj.key === 'NbBikes';
    }).value;

    const numberOfSpaces = bikePoint.additionalProperties.find((obj) => {
      return obj.key === 'NbEmptyDocks';
    }).value;

    const numberOfDocks = bikePoint.additionalProperties.find((obj) => {
      return obj.key === 'NbDocks';
    }).value;

    // const bikeInfo = {numberOfBikes, numberOfSpaces}
    const bikeInfo = { numberOfBikes, numberOfSpaces, numberOfDocks };

    marker.addListener('click', () => {
      createInfoWindowForMarker(marker, bikePoint, bikeInfo);
    });
  }

  // 6. Create an information window for when a user selects a bike point
  function createInfoWindowForMarker(marker, bikePoint, bikeInfo) {
    if (infoWindow) infoWindow.close();

    infoWindow = new google.maps.InfoWindow({
      content: `
        <div>
          <h3>${bikePoint.commonName}</h3>
          <p>Number of available bikes: ${bikeInfo.numberOfBikes}</p>
          <p>Number of available spaces: ${bikeInfo.numberOfSpaces}</p>
        </div>`,
    });

    // Exercise
    infoWindow = new google.maps.InfoWindow({
      content: `
        <div>
          <img src='./images/bike.jpg' alt="Bike" class="bike">
          <h3>${bikePoint.commonName}</h3>
          <p>Number of available bikes: ${bikeInfo.numberOfBikes}</p>
          <p>Number of available spaces: ${bikeInfo.numberOfSpaces}</p>
          <p>Total Number of docks: ${bikeInfo.numberOfDocks}</p>
          <p>Availability: ${Math.round(
            (bikeInfo.numberOfSpaces / bikeInfo.numberOfDocks) * 100,
          )}%</p>
        </div>`,
    });

    infoWindow.open(map, marker);
    map.setCenter(marker.getPosition());
  }
} else {
  $('#map').append('Sorry, the browser does not support geolocation');
}
