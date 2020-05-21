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

        };

    }

});

$("#dropdown").click(showDropdown);

$(".dropdown").mouseleave(hideDropdown);

$(".dropdown li").click(genre);

$(".logo, #home").click(showAll);

$("#search").click(showSearchbar);

$("input").focusout(hideSearchbar);

$("main").click(hideSearchbar);

$("input").keyup(search);


function showDropdown () {

    $(".dropdown").show();

};

function hideDropdown () {

    $(".dropdown").hide();

};

function genre () {

    $(".element").show();

    var genre = $(this).text();

    $(".element").each(

        function() {

            var elementGenre = $(this).find(".genre").text();

            if (elementGenre != genre) {

                $(this).hide();

            };
        }
    );
};

function showAll () {

    $(".element").show();

};

function showSearchbar () {

    $(".nav > ul").hide();

    $(".nav > input").show();

    $(".nav > i").show();

}

function hideSearchbar () {

    $(".nav > ul").show();

    $(".nav > input").hide();

    $(".nav > i").hide();

}

function search () {

    var search = $("input").val().toLowerCase().trim();

    $(".element").each(

        function() {

            var title = $(this).find(".title > span").text().toLowerCase();

            if (title.includes(search)) {

                $(this).show();

            } else {

                $(this).hide();

            }
        }
    );
}
