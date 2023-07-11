"use strict";
$(function () {
    // $('li').css('font-size', '20px')
    // $('li, h1, p').css('background-color', 'yellow')
    // let contents = $('#headline').html();
    // // alert(contents);


    $( "h1" ).on( "click", function() {
        $(this).css('background-color', 'blue');
    } );

    $( "p" ).on( "dblclick", function() {
        $(this).css('font-size', '18px');
    } );

    $( "li" ).on({
        mouseenter: function () {
            $(this).css('color', 'red');
        },

        mouseleave: (e) => {
            $(e.target).css('color', 'black');
        }
    });


});