"use strict"
$(() => {

    // Toggles <dd> visibility
    $('a').on('click', function () {
        $('dd').toggleClass('invisible');
    });

    // Highlights the last <li> child in a <ul>
    $('button').on('click', function () {
        $('ul').each(function (index, ulElement) {
                $(ulElement).children()
                    .last().css('background-color', 'yellow')
            }
        )
    })

    //
    $('h3').on('click',function (event) {
        $(event.target).next().css('font-weight', 'bold')
    })

    // Changes the color of the first <li> in the <ul> to blue
    $('li').on('click', function (event) {
        $(event.target).parent().children().first().css('color', 'blue')
    })
});

