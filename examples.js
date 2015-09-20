// var output = ('input').Replace(" ", "+");
var movieData;

function searchCallback(results) {
    console.log(results);
}

// var searchQuery ;

$(document).ready(function(){
    $(".submit").on('click', function(){
        var searchQuery = $('.movieName').val();
        console.log("The Movie " + searchQuery);
        search(searchQuery);
    });


});

function search(query){
    $.ajax({
    	url:"http://www.omdbapi.com/?t="+(query).replace(' ', '+')+"&y=&plot=short&r=json"
    }).done(function(movie){
        searchCallback(movie);
        movieData = movie; 
        var $movieTitle = ("<p>"+movie.Title+"</p>");
        var $movieYear = ("<p>"+movie.Year+"</p>");
        var $moviePlot = ("<p>"+movie.Plot+"</p>");
        $(".movieTitle").append($movieTitle);
        $(".movieYear").append($movieYear);
        $(".moviePlot").append($moviePlot);
        // searchCallback(data.results);
        // function query() {
        // var input = document.getElementById("userInput").value;
        // alert(input);
        // }
    });
// }
};


