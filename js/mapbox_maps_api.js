$(() => {

    // GLOBAL VARIABLES
    const map = initializeCityFavRestaurantMap();
    // const popup = createPopup();
    // const marker = createMarker();

    // FUNCTIONS
    //     Create map with city of favorite restaurant
    function initializeCityFavRestaurantMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-day-v1',
            center: [-98.491142, 29.424349],
            zoom: 10
        }

        geocode('136 E Grayson St Suite 120, San Antonio, TX 78215', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
            map.setZoom(15);
            const southerleighPopup = new mapboxgl.Popup()
                .setHTML(`<p>Southerleigh Fine Food And Brewery</p>`)
            const restaurantMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(southerleighPopup);
        })

        return new mapboxgl.Map(mapOptions);
    }

    // restaurantMarker.setPopup(popup);
    // const southerleighPopup = new mapboxgl.Popup()
    //     .setHTML(`<p>Southerleigh Fine Food And Brewery</p>`);
    //     .setPopup(southerleighPopup);
    //      southerleighPopup.addTo(map);


    // Create marker and set zoom for best viewing
    // function createMarker() {
    //     return
    //         .setLngLat([-98.48104, 29.44258])
    //         .addTo(map)
    // }

    // Create popup with name of restaurant(after it has been clicked!)
    // function createPopup() {
    //     return new mapboxgl.Popup()
    //         .setLngLat([-98.48104, 29.44258])
    //         .setHTML(`
    //             <div>
    //                 <h1>Southerleigh Fine Food And Brewery</h1>
    //             </div>
    //         `);
    // }




});