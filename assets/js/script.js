var requestURL = 'https://imdb-api.com/en/API/AdvancedSearch/k_alvf6u1h/';
var redirectUrl = './result.html'
var searchBtnEl = $('#search-btn')
var selectAgeEl = document.querySelector('#age-selection')
var inputKeywordEl = document.querySelector('#keyword-input')

function searchTitle() {
    var selectedAge = selectAgeEl.value
    var userKeywords = inputKeywordEl.value
    var queryUrl = requestURL + '?certificates=us:' + selectedAge + '&keywords=' + userKeywords;
    localStorage.setItem('queryUrl', queryUrl)
}

function handleFormSubmit(event) {
    event.preventDefault()
    searchTitle()
    location.assign(redirectUrl)
}

searchBtnEl.on('click', handleFormSubmit)
