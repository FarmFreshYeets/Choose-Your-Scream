var requestURL = 'https://imdb-api.com/en/API/SearchMovie/k_alvf6u1h/inception 2010';

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

