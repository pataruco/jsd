// Add an event listener to Submit button
// Get value from input and make request to postcode api
// https://api.postcodes.io/postcodes/<postcode>
// Update UI with location
// Add error handlers for bad requests

'use strict';

const postcodeInput = document.querySelector('#postcode');
const submit = document.querySelector('#submit');
const tempPara = document.querySelector('#temp');
const locationPara = document.querySelector('#location');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const { value: postcode } = postcodeInput;
  getData(postcode);
});

const getLocation = (data) => {
  const {
    result: { region, latitude, longitude, admin_district },
  } = data;

  return {
    region,
    admin_district,
    lat: parseFloat(latitude).toFixed(2),
    lon: parseFloat(longitude).toFixed(2),
  };
};

const updateUISuccess = ({ region, admin_district }) => {
  postcodeInput.value = '';
  locationPara.textContent = region + ', ' + admin_district;
};

const getData = async (postCode) => {
  try {
    const response = await fetch(
      `http://api.postcodes.io/postcodes/${postCode}`,
    );

    if (response.ok) {
      const data = await response.json();
      const { region, admin_district, lat, lon } = getLocation(data);
      updateUISuccess({
        region,
        city,
        admin_district,
      });
    } else {
      throw response.status;
    }
  } catch (error) {
    updateUIError(error);
  }
};
