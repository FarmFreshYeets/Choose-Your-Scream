var edamamApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q='
var foodKeyword = $('#food-keyword') // '#food-keyword' does not currently exist

function foodSearch(searchKeyword) {
    var requestUrl = edamamApiUrl + searchKeyword + '&app_id=ec3b9d99&app_key=5c1cf51a327c141221f933d66d93d0d6'

    fetch(requestUrl)
        .then(function (response) {
           return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
}