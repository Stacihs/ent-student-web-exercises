$(() => {
"use strict"
    // GLOBAL VARIABLES
    const map = initializeMap();
    // const map = initializeCityFavRestaurantMap();
    const restaurants = [
        {
            "name": "Ida Claire",
            "address": "7300 Jones Maltsberger Rd, San Antonio, TX 78209",
            "phone": 210-667-2145
        }, {
            "name": "The Rustic",
            "address": "7619 La Cantera Pkwy UNIT 204, San Antonio, TX 78257",
            "phone": 210-245-7500
        }, {
            "name": "Jardin",
            "address": "555 Funston Pl, San Antonio, TX 78209",
            "phone": 210-338-5100
        }
    ]

    // FUNCTIONS
    // Create a new map
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


    //     Create map with city of favorite restaurant
    // function initializeCityFavRestaurantMap() {
    //     mapboxgl.accessToken = MAPBOX_TOKEN;
    //
    //     const mapOptions = {
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/navigation-day-v1',
    //         center: [-98.491142, 29.424349],
    //         zoom: 10
    //     }
    //     geocode('136 E Grayson St Suite 120, San Antonio, TX 78215', MAPBOX_TOKEN).then((data) => {
    //         console.log(data);
    //         map.setCenter(data);
    //         map.setZoom(15);
    //         const southerleighPopup = new mapboxgl.Popup()
    //             .setHTML(`<p>Southerleigh Fine Food And Brewery</p>`)
    //         const restaurantMarker = new mapboxgl.Marker()
    //             .setLngLat(data)
    //             .addTo(map)
    //             .setPopup(southerleighPopup);
    //     })
    //
    //     return new mapboxgl.Map(mapOptions);
    // }

//     // REFACTOR Create markers for three favorite restaurants
    function topThree() {

        restaurants.forEach( (restaurant) => {

            geocode(`${restaurant.address}`, MAPBOX_TOKEN).then((data) => {
                console.log(data);
                map.setCenter(data);
                const restaurantPopup = new mapboxgl.Popup()
                    .setHTML(`<h1>${restaurant.name}</h1><p>${restaurant.address}</p><p>${restaurant.phone}</p>`)
                const restaurantMarker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map)
                    .setPopup(restaurantPopup);
            });
        });
    }

    topThree();

})();