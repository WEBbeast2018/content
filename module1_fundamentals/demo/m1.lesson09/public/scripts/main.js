// declare variables
let initialized = false;
const WEATHER_API_KEY = '268961715dd7614d39614d0b6c5ac5c6';     // the key to the weather API
const MAPBOX_KEY = 'pk.eyJ1IjoieXV2YWxiYXJsZXZpIiwiYSI6ImNqZzB1Ymd2NzE0anEyd2xlZzVtOW95eXgifQ.RQlDdsphdNAp1W-6lxRiQg';

const tempUnits = 'metric';
// const selectedElement = document.getElementById('cities');

// creating map
const mymap = L.map('mapid');
let myMarker;

// creating a listener for the changes in the drop-down list
const cities = document.querySelectorAll('.selectCity .dropdown-menu a');

for (let i = 0; i < cities.length; i++) {
    cities[i].addEventListener('click', (ev) => {
        const cityName = ev.target.getAttribute('value')
        const city = new City(cityName);             // create a new City instance
        getWeatherAPI(city);
        if (initialized) {
            updateMap(city);
        } else {
            initMap(city);
        }
    });
}

// get the Weather API
function getWeatherAPI(city) {
    // sending a request to the open weather map site to get the weather data
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.cityName}&units=${tempUnits}&appid=${WEATHER_API_KEY}`)
        .then(response => response.json())
        .then(data => setWeather(data))
        .then(weather => displayWeather(weather, city));
}

// set the weather object according to the API Weather response
function setWeather(data) {
    // set its fields
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const cloudness = data.clouds.all;
    const rain = (data.weather && data.weather.length > 0) ? data.weather[0].main : '';
    const description = (data.weather && data.weather.length > 0) ? data.weather[0].description : '';
    const icon = (data.weather && data.weather.length > 0) ? data.weather[0].icon : '';

    // create a new weather instance
    return new Weather(temperature, humidity, cloudness, rain, description, icon);
}

// display the Weather Data on the Web page
function displayWeather(weather, city) {
    document.getElementById('cityName').innerHTML = city.cityName;
    document.getElementById('weatherIcon').innerHTML = `<img src="http://openweathermap.org/img/w/${weather.icon}.png"/>`;
    document.getElementById('temp').innerHTML = `${weather.temperature}&#xb0 C`;
    document.getElementById('rain').innerHTML = weather.rain;
    document.getElementById('humidity').innerHTML = `${weather.humidity}%`;
    document.getElementById('cloudness').innerHTML = `${weather.cloudness}%`;
    document.getElementById('description').innerHTML = weather.description;
}

function initMap(city) {
    // updating the map View
    mymap.setView(city.mapData.coords, 13);

    // getting the Mapbox Street tile layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: MAPBOX_KEY
    }).addTo(mymap);

    // add marker
    myMarker = L.marker(city.mapData.coords).addTo(mymap);
    // set as initialized
    initialized = true;
}

function updateMap(city) {
    // change marker location
    const newLatLng = new L.LatLng(city.mapData.coords[0], city.mapData.coords[1]);
    myMarker.setLatLng(newLatLng);
    // set map view
    mymap.panTo(city.mapData.coords);
}