// var queryUrl = "https://imdb-api.com/en/API/" + title + "/k_1234567/tt1832382";
// var queryUrl = "https://imdb-api.com/en/API/" + title + "/k_alvf6u1h/tt1832382";

// var watchMovie = $('#') // var newMovie = $('input[name="movie-input"]').val();
// var imbdApiURL = 'https://imdb-api.com/en/API/SearchMovie/k_alvf6u1h/scream';

var title;
var movieName = document.getElementById("#movieName");

function searchTitle(event) {
    event.preventDefault();
    var title = document.getElementById("#keyword-input").value
    var queryUrl = 'https://imdb-api.com/en/API/SearchMovie/k_alvf6u1h/' + title;

    fetch(queryUrl).then(titleResponse => {
        console.log(titleResponse)
        if (titleResponse.ok) {
            titleResponse.json().then(movieData = {
                console.log(movieData)
                movieName.textContent = movieData.title;
            })
        }
    }
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch('https://imdb-api.com/en/API/Title/k_alvf6u1h/tt1832382', requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    searchTitle()

    searchButton.addEventListener("click", searchTitle);
}

var requestURL = 'https://imdb-api.com/en/API/SearchMovie/k_alvf6u1h/inception 2010';
var redirectUrl = './result.html'
var searchBtnEl = $('#search-btn')
var selectAgeEl = document.querySelector('#age-selection')
var inputKeywordEl = document.querySelector('#keyword-input')

function getApi() {
    var requestURL = ('https://imdb-api.com/en/API/SearchMovie/k_alvf6u1h/inception 2010');
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

// for right now all this does is take us to the results page
function handleFormSubmit(event) {
    event.preventDefault()
    var selectedAge = selectAgeEl.value
    var userKeywords = inputKeywordEl.value
    console.log(selectedAge)
    console.log(userKeywords)
    location.assign(redirectUrl)
}

searchBtnEl.on('click', handleFormSubmit)

