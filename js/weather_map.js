$(() => {
    "use strict";
    /*****GLOBAL VARIABLES*****/
        // const map = initializeMap();

    const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

    /*****FUNCTIONS*****/

    $.ajax(OPEN_WEATHER_URL, {
        data: {
            APPID: OPEN_WEATHER_APPID, lat: 29.423017, lon: -98.48527, units: "imperial"
        }
    }).done((data) => {
        console.log('current weather', data);
        renderCurrentWeather(data);
    });

    const renderCurrentWeather = ((weatherStats) => {
        $('#weatherInfo').append(`<div class="weatherCard">
                <h1>Current Conditions for ${weatherStats.name}</h1>
                <h2>Current Temperature</h2>
                <div><span>${parseInt(weatherStats.main.temp)}&deg;</span></div>
                <h2>Feels Like</h2>
                <div><span>${parseInt(weatherStats.main.feels_like)}&deg;</span></div>
                <h2>Wind</h2>
                <div><span>${weatherStats.wind.speed} mph</span></div>
                <h2>Conditions</h2>
                <div><span>${weatherStats.weather[0].description}</span></div>
            </div>`);

    });

    // function initializeMap() {
    //     mapboxgl.accessToken = MAPBOX_TOKEN;
    //
    //     const mapOptions = {
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/navigation-day-v1',
    //         center: [-98.491142, 29.424349],
    //         zoom: 10
    //     }
    //     return new mapboxgl.Map(mapOptions);
    // }

    // function getWeatherURL(lat, lon) {
    //     return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    // }


    /*****EVENTS*****


     /*****RUNS WHEN APP LOADS*****/


});