// https://flynn.boolean.careers/exercises/api/array/music

var source   = $("#entry-template").html();

var template = Handlebars.compile(source);


$.ajax({

    "url": "https://flynn.boolean.careers/exercises/api/array/music",

    "method": "get",

    "success": function(data) {

        for (var i = 0; i < data.response.length; i++) {

            var poster = data.response[i].poster;

            var title = data.response[i].title;

            var author = data.response[i].author;

            var genre = data.response[i].genre;

            var year = data.response[i].year;

            var context = {
                "poster" : poster,
                "title" : title,
                "author" : author,
                "genre" : genre,
                "year" : year,
            };

            var html = template(context);

            $("main").append(html);

        }

    }

});
