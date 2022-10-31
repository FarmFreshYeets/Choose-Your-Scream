var edamamApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q='
var foodKeyword = $('#food-keyword') // '#food-keyword' does not currently exist
var imdbRequestUrl = localStorage.getItem('queryUrl')
var foodForm = document.getElementById('food-form')

function getApi(x) {
    fetch(x).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var movie1 = Math.floor(Math.random() * data.results.length)
                var movie2 = Math.floor(Math.random() * data.results.length)
                var movie3 = Math.floor(Math.random() * data.results.length)
                localStorage.setItem('movie-name1', data.results[movie1].title)
                localStorage.setItem('movie-name2', data.results[movie2].title)
                localStorage.setItem('movie-name3', data.results[movie3].title)
                localStorage.setItem('movie-desc1', data.results[movie1].plot)
                localStorage.setItem('movie-desc2', data.results[movie2].plot)
                localStorage.setItem('movie-desc3', data.results[movie3].plot)
            })
        }
    })
}

getApi(imdbRequestUrl)

var foodInput = {
    apiKey: '5c1cf51a327c141221f933d66d93d0d6',
    foodSearch: function (searchKeyword) {
        fetch(edamamApiUrl + searchKeyword + '&app_id=ec3b9d99&app_key=' + this.apiKey,)
        .then((response) => response.json())
        .then((data) => this.displayRecipe(data));
    },

    displayRecipe: function(data) {
        var { label, image, ingredientLines, url }  = data.hits[0].recipe;
        console.log(label,image,ingredientLines,url);
        document.querySelector("#dish-title").innerText = label;
        document.querySelector("#dish-image").src = image;
        document.querySelector("#ingredients").innerText = "Ingredients: " + ingredientLines
        document.querySelector("#recipe-link").innerText = url;
    },

    search: function() {
        this.foodSearch(document.querySelector(".food-input").value);
    }
};

foodForm.addEventListener('submit', function(event) {
    event.preventDefault()
})

document.querySelector("#search-btn").addEventListener("click", function() {
    foodInput.search();
});

