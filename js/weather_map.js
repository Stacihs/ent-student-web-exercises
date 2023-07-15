$(() => {
    /*****GLOBAL VARIABLES*****/
    const map = initializeMap();
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';


    /*****FUNCTIONS*****/
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-day-v1',
            center: [-98.491142, 29.424349],
            zoom: 10
        }
        return new mapboxgl.Map(mapOptions);
    }
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }


    /*****EVENTS*****


     /*****RUNS WHEN APP LOADS*****/
initializeMap();

});