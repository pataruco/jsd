const postcodeInput = document.querySelector('#postcode');
const submit = document.querySelector('#submit');
const locationElement = document.querySelector('#location');
let city;
let borough;

const updateUi = () => {
  postcodeInput.value = '';
  locationElement.textContent = `${city}, ${borough}`;
};

const getLocation = (data) => {
  city = data.result.region;
  borough = data.result['admin_district'];
};

const getData = (postcode) => {
  fetch(`http://api.postcodes.io/postcodes/${postcode}`)
    .then((data) => {
      if (data.ok) {
        return data.json();
      } else {
        throw response.status;
      }
    })
    .then(getLocation)
    .then(updateUi);
};

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const postcode = postcodeInput.value;
  getData(postcode);
});
