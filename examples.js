// var output = ('input').Replace(" ", "+");
var movieData;

function searchCallback(results) {
    console.log(results);
}

var searchQuery = "";

$(document).ready(function(){
    $(".submit").on('click', function(){
        event.preventDefault();
        searchQuery = $('.movieName').val();
        console.log("The Movie " + searchQuery);
        search(searchQuery);
    });

});

function search(query){
    $.ajax({
    	url:"http://www.omdbapi.com/?t="+encodeURI(query)+"&y=&plot=short&r=json"
    }).done(function(movie){
        searchCallback(movie);
        movieData = movie; 
        var $movieTitle = ("<p>"+movie.Title+"</p>");
        var $movieYear = ("<p>"+movie.Year+"</p>");
        var $moviePlot = ("<p>"+movie.Plot+"</p>");
        $(".searchResultDisplay").append($movieTitle + "<br>" + $movieYear + "<br>" + $moviePlot);
        // $(".movieYear").append($movieYear);
        // $(".moviePlot").append($moviePlot);
        // searchCallback(data.results);
        // function query() {
        // var input = document.getElementById("userInput").value;
        // alert(input);
        // }
    });
// }
};


