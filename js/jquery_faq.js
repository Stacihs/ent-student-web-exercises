"use strict"



    $('a').on('click', function () {
        $('dd').toggleClass('invisible');
    });

    // $('body').append(`<a href="#">Click Here</>`);

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
            // .$('ul').parent().$('ul').children()
            // .$('li').first().css('color', 'blue')
    })

// $('body').append('<button>Push Me</button>')
//     .append('<h4>Practice</h4><div><ol><li></li><li></li></ol></div>')