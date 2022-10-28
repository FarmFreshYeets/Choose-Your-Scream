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