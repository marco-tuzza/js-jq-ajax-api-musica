// https://flynn.boolean.careers/exercises/api/array/music

var source   = $("#entry-template").html();

var template = Handlebars.compile(source);


$.ajax({

    "url": "https://flynn.boolean.careers/exercises/api/array/music",

    "method": "get",

    "success": function(data) {

        for (var i = 0; i < data.response.length; i++) {

            var context = {
                "poster" : data.response[i].poster,
                "title" : data.response[i].title,
                "author" : data.response[i].author,
                "genre" : data.response[i].genre,
                "year" : data.response[i].year,
            };

            var html = template(context);

            $("main").append(html);

        }

    }

});

$("#dropdown").hover(showDropdown);

$(".dropdown").mouseleave(hideDropdown);

$(".dropdown li").click(genre);

$(".logo, #home").click(showAll)


function showDropdown () {

    $(".dropdown").slideDown();

};

function hideDropdown () {

    $(".dropdown").slideUp();

}

function genre() {

    $(".element").show();

    var genre = $(this).text();

    var element = $(".element").length;

    for (var i = 0; i < element; i++) {

        var elementGenre = $(".element").eq(i).find(".genre").text();

        if (elementGenre != genre) {

            $(".element").eq(i).hide();

        }

    };

};

function showAll() {

    $(".element").show()

}
