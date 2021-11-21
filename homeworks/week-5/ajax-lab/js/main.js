/*
    1. Sign up for openweathermap.org and generate an API key.
    2. User either $.get to pull current weather data for London.
       (hint: http://api.openweathermap.org/data/2.5/weather?q=...)
    3. Log the temperature to the console. Note that the temperature will be in Kelvin.
    4. Incorporate the following code into your app to log a Fahrenheit value for the temperature to the console:
        // calculate and store Fahrenheit temperature
        const degC = (temp - 273.15)
        // round calculated temperature down to the nearest whole number
        const degCInt = Math.floor(degC);
    5. Use DOM manipulation to add the returned temperature to the span element with the id 'temp'.
    6. Sign up for developer.weatherunlocked.com and obtain your application ID and application key.
    7. Update your code to obtain the current temperature from this data source instead of openweathermap, log it to the console, and then add it to the DOM.
    8. Refactor your code as necessary to separate the code for DOM manipulation from the code for sending an HTTP request.

    BONUS 1: Refactor your code to use a fetch request instead of jQuery to pull current weather data.
    BONUS 2: Implement a form that prompts users for a city and borough and returns data for the location they specify. (Uncomment out the existing form code in index.html as marked).
    BONUS 3: The response data for each request includes the name of an image file that illustrates current weather conditions. Use the documentation to figure out the URL for these files on the server, and then incorporate this image into the DOM.
*/

'use strict';

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const weatherUrl2 = 'http://api.weatherunlocked.com/api/current/';

$.get(`${weatherUrl}London&appId=${api_key}`).done((data) => {
  const temp = data.main.temp;
  // calculate and store Fahrenheit temperature
  const degC = temp - 273.15;
  // round calculated temperature down to the nearest whole number
  const degCInt = Math.floor(degC);
  $('#temp').text(`${degCInt}℃`);

  // updateUI(data);
});

// STEP 8
// const updateUI = (data) => {
//     const temp = data.main.temp;
//     const degC = (temp - 273.15)
//     const degCInt = Math.floor(degC);
//     $('#temp').text(`${degCInt}℃`);
// }

// BONUS 1
// fetch(`${weatherUrl2}51.51,-0.07?app_id=${weatherunlocked_api_id}&app_key=${weatherunlocked_api_key}`)
//     .then(function (response) {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw response.status;
//         }
//     })
//     .then(function(response) {
//         const temp = response.feelslike_c;
//         const degCInt = Math.floor(temp);
//         $('#temp').text(`${degCInt}℃`);
//         return response;
//     })
//     .catch(function (error) {
//         throw new Error(error);
//     });

// BONUS 2

// const $city = $('#city');
// const $postcode = $('#postcode');
// const $getTemp = $('#getTemp');
// let city;
// let postcode;

// $getTemp.on('click', (event) => {
//     event.preventDefault();
//     city = $city.val();
//     postcode = $postcode.val();

//     fetch(`${weatherUrl2}uk.${postcode}?app_id=${weatherunlocked_api_id}&app_key=${weatherunlocked_api_key}`)
//     .then(function (response) {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw response.status;
//         }
//     })
//     .then(function(response) {
//     console.log("-> : response", response)
//         const temp = response.feelslike_c;
//         const degCInt = Math.floor(temp);
//         $('#temp').text(`${degCInt}℃`);

//         const icon = response.wx_icon;
//         const $image = $('<img>');
//         $image.attr('src', `images/${icon.slice(0, -3)}png`);
//         $('#temp').append($image);

//         return response;
//     })
//     .catch(function (error) {
//         throw new Error(error);
//     });
// })
