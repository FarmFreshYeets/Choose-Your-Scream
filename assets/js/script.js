// var watchMovie = $('#') // var newMovie = $('input[name="movie-input"]').val();

function getApi() {
    var imbdApiURL = 'https://imdb-api.com/en/API/SearchMovie/k_alvf6u1h';

    fetch(imbdApiURL)
    .then(function(response){
        return response.json();
    })
}
getApi()
// searchButton.addEventListener("click", searchMovie);