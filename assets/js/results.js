var edamamApiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q='
var foodKeyword = $('#food-keyword')
var imdbRequestUrl = localStorage.getItem('queryUrl')
var foodForm = document.getElementById('food-form')
var modal = $('#error')
var modalBttn = $('#error-bttn')
var modalContent = $('#modal-content')
var modalClose = $('#close-modal')
var notif = $('#notif')
var bttnRedirect = './index.html'

function getApi(x) {
    fetch(x).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data)
                // gives the user an error message in the form of a modal that tells them what went wrong
                if (data.errorMessage) {
                    modalContent.text('Sorry for the inconvience but we have reached our maximum requests for today! We will display previous results if able. Try again tomorrow for more results!')
                    modalClose.attr('class', 'button is-warning is-light')
                    modalBttn.attr('class', 'button is-danger is-light is-hidden')
                    notif.attr('class', 'notification is-light is-info')
                    openModal()
                // in case the user's keyword did not get any results, display a different error message modal
                } else if (data.results.length == 0){
                    modalContent.text('Oops! That keyword and age rating did not have any results! Please try again!')
                } else {
                    // randomly choose 3 movies from the list and then set localStorage keys with values of the movies' titles, plot description, and image url.
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
                }
            }).then(function () {
                // after all of those values have been set in local storage, display them on the movie cards in result.html
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
// call this function with the requestUrl from script.js when the page loads
getApi(imdbRequestUrl)

// takes a user keyword input for food and displays a meal with the necessary ingredients and a link to the recipe 
var foodInput = {
    apiKey: '5c1cf51a327c141221f933d66d93d0d6',
    foodSearch: function (searchKeyword) {
        fetch(edamamApiUrl + searchKeyword + '&app_id=ec3b9d99&app_key=' + this.apiKey,)
            .then((response) => response.json())
            .then((data) => this.displayRecipe(data));
    },

    displayRecipe: function (data) {
        // this var splits up the data from the fetch into variables that we can plug into the result.html page
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

modalBttn.click(function(event){
    location.assign(bttnRedirect)
})

function openModal() {
    modal.addClass('is-active')
}

function closeModal() {
    modal.attr('class', 'modal')
}

modalClose.click(function(event){
    closeModal()
})