var requestURL = 'https://imdb-api.com/en/API/AdvancedSearch/k_qmsgvqkk/';
var redirectUrl = './result.html'
var searchBtnEl = $('#search-btn')
var selectAgeEl = document.querySelector('#age-selection')
var inputKeywordEl = document.querySelector('#keyword-input')

// takes the user inputs and creates a url that can be fetched
function searchTitle() {
    var selectedAge = selectAgeEl.value
    var userKeywords = inputKeywordEl.value
    var queryUrl = requestURL + '?certificates=us:' + selectedAge + '&keywords=' + userKeywords;
    // stores the url in local storage so it can be fetched in results.js
    localStorage.setItem('queryUrl', queryUrl)
}

function handleFormSubmit(event) {
    event.preventDefault()
    searchTitle()
    // takes the user to the result.html page where the movies will be shown
    location.assign(redirectUrl)
}

searchBtnEl.on('click', handleFormSubmit)
