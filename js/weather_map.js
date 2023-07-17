$(() => {
    "use strict";
    /*****GLOBAL VARIABLES*****/
        // const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
        // const map = initializeMap();
    const OPEN_WEATHER_URL_FIVE_DAY = "https://api.openweathermap.org/data/2.5/forecast";
    // const map = initializeMap();

    /*****FUNCTIONS*****/
    // $.ajax(OPEN_WEATHER_URL, {
    //     data: {
    //         APPID: OPEN_WEATHER_APPID, lat: 29.423017, lon: -98.48527, units: "imperial"
    //     }
    // }).done((data) => {
    //     console.log('current weather', data);
    //     renderCurrentWeather(data);
    // }).fail(console.error);

    // Renders current weather conditions
    // const renderCurrentWeather = ((weatherStats) => {
    //     $('#weatherInfo').append(`<div class="weatherCard">
    //             <h1>${weatherStats.name}</h1>
    //             <div><span id="temp">${parseInt(weatherStats.main.temp)}&deg;</span></div>
    //             <h2>Feels Like</h2>
    //             <div><span>${parseInt(weatherStats.main.feels_like)}&deg;</span></div>
    //             <h2>Humidity</h2>
    //             <div><span>${parseInt(weatherStats.main.humidity)}%</span></div>
    //             <h2>Wind</h2>
    //             <div><span>${weatherStats.wind.speed} mph</span></div>
    //             <h2>Conditions</h2>
    //             <div><span>${weatherStats.weather[0].description}</span></div>
    //         </div>`);
    // });


    $.ajax(OPEN_WEATHER_URL_FIVE_DAY, {
        data: {
            APPID: OPEN_WEATHER_APPID, lat: 29.423017, lon: -98.48527, units: "imperial"
        }
    }).done((data) => {
        console.log(data);
        renderFiveDayForecast(data);
    }).fail(console.error);

    const renderFiveDayForecast = ((weatherStats) => {
        weatherStats.list.forEach((day, index) => {
            if (index % 8 === 0) {
                $('#weatherInfo').append(`<div class="weatherCard">
                        <h2>${day.dt_txt}</h2>
                    <div><span id="temp">${parseInt(day.main.temp)}&deg;</span></div>
                     <h2>Feels Like</h2>
                     <div><span>${parseInt(day.main.feels_like)}&deg;</span></div>
                    <h2>Humidity</h2>
                    <div><span>${parseInt(day.main.humidity)}%</span></div>
                    <h2>Wind</h2>
                    <div><span>${day.wind.speed} mph</span></div>
                    <h2>Conditions</h2>
                    <div><span>${day.weather[0].description}</span></div>
                </div>`);
            }
        });
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
    //
    // function initializeCityFavRestaurantMap() {
    //         mapboxgl.accessToken = MAPBOX_TOKEN;
    //
    //         const mapOptions = {
    //             container: 'map',
    //             style: 'mapbox://styles/mapbox/navigation-day-v1',
    //             center: [-98.491142, 29.424349],
    //             zoom: 10
    //         }
    //         geocode('136 E Grayson St Suite 120, San Antonio, TX 78215', MAPBOX_TOKEN).then((data) => {
    //             console.log(data);
    //             map.setCenter(data);
    //             map.setZoom(15);
    //             const southerleighPopup = new mapboxgl.Popup()
    //                 .setHTML(`<p>Southerleigh Fine Food And Brewery</p>`)
    //             const restaurantMarker = new mapboxgl.Marker()
    //                 .setLngLat(data)
    //                 .addTo(map)
    //                 .setPopup(southerleighPopup);
    //         })
    //
    //         return new mapboxgl.Map(mapOptions);
    //     }
    //
    //     initializeCityFavRestaurantMap();

    /*****EVENTS*****
     //

     /*****RUNS WHEN APP LOADS*****/


});