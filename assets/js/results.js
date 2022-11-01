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
                localStorage.setItem('movie-img1', data.results[movie1].image)
                localStorage.setItem('movie-img2', data.results[movie2].image)
                localStorage.setItem('movie-img3', data.results[movie3].image)
            }).then(function () {
                $('#movie-1').text(localStorage.getItem('movie-name1'))
                $('#movie-2').text(localStorage.getItem('movie-name2'))
                $('#movie-3').text(localStorage.getItem('movie-name3'))
                $('#movie-description-1').text(localStorage.getItem('movie-desc1'))
                $('#movie-description-2').text(localStorage.getItem('movie-desc2'))
                $('#movie-description-3').text(localStorage.getItem('movie-desc3'))
                document.getElementById('movie-img-1').src = (localStorage.getItem('movie-img1'))
                document.getElementById('movie-img-2').src = (localStorage.getItem('movie-img2'))
                document.getElementById('movie-img-3').src = (localStorage.getItem('movie-img3'))
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

    displayRecipe: function (data) {
        var { label, image, ingredientLines, url } = data.hits[0].recipe;
        document.querySelector("#dish-title").innerText = label;
        document.querySelector("#dish-image").src = image;
        document.querySelector("#ingredients").innerText = "Ingredients: " + ingredientLines
        document.querySelector("#recipe-link").innerText = url;
        document.querySelector("#recipe-link").href = url;
    },

    search: function () {
        this.foodSearch(document.querySelector(".food-input").value);
    }
};

foodForm.addEventListener('submit', function (event) {
    event.preventDefault()
})

document.querySelector("#search-btn").addEventListener("click", function () {
    foodInput.search();
});

