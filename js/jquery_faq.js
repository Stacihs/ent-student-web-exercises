"use strict"



    $('a').on('click', function () {
        $('dd').toggleClass('invisible');
    });

    $('button').on('click', function () {
        $('ul').each(function (index, ulElement) {
            $(ulElement).children()
                .last().css('background-color', 'yellow')
            }
        )
    })


    $('h3').on('click',function () {
        $('li').css('font-weight', 'bold')
    })

    $('li').on('click', function (event) {
        $(event.target).parent().children().first().css('color', 'blue')
    })