$(() => {
 "use strict";

// TODO
//     DOM Warm Up
//
//     1. create a file called `dom-warmups.html` (add script tags and jQuery)
//     2. add a button to the html
//     3. when the button is clicked, change the background color of the page to your favorite color


const changeBackground = () => {
    $('body').css("background-color", "green");
}
$('button').on('click', changeBackground);


});