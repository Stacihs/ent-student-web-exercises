$(() => {

    // GLOBAL VARIABLES
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();

    // FUNCTIONS
    //     Create map with city of favorite restaurant
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-day-v1',
            center: [-98.48011562937114, 29.442711835394373],
            zoom: 10
        }

        return new mapboxgl.Map(mapOptions);
    }

    // Create marker and set zoom for best viewing

    // Create popup with name of restaurant(after it has been clicked!)
    // Add function to button to zoom


});