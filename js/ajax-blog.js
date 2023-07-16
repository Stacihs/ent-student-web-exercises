$(() => {
    "use strict";

    // AJAX GET request to get blog data
    $.ajax("data/blog.json");

    $.ajax("data/blog.json").done((data) => {
        console.log(data);
        renderBlogPosts(data);
    });

    const renderBlogPosts = ((postsData) => {
        for (let post of postsData) {
            $('#posts').append(`<div class="article">
                <div>
                    <h2>${post.title}</h2>
                </div>
                <div>
                    <h3>${post.date}</h3>
                </div>
                <div>
                    <p>${post.content}</p>
                </div>
                <div>
                    <p>${post.categories}</p>
                </div>
            </div>`);
        }
    });

})();