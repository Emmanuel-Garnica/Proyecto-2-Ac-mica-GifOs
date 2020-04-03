document.getElementsByClassName("JonathanV")[0].style.backgroundImage = "url('https://media.giphy.com/media/5PhoLTGAiHguInjU8w/giphy.gif')";
document.getElementsByClassName("SailorM")[0].style.backgroundImage = "url('https://media.giphy.com/media/148v5ID1vNBVyo/giphy.gif')";
document.getElementsByClassName("FabFive")[0].style.backgroundImage = "url('https://media.giphy.com/media/fQxSFJzoS8zKJXg5ek/giphy.gif')";
document.getElementsByClassName("Unicorn")[0].style.backgroundImage = "url('https://media.giphy.com/media/26AHG5KGFxSkUWw1i/giphy.gif')";

function verMasJonathan() {
    let title = "Jonathan Vanness";
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let suggestions = fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((images) => images.images.preview_webp.url))
        .then((urls) => {
            let i = 0;
            urls.forEach((e) => {
                document.querySelectorAll(".gif_result")[i].setAttribute("src", e)
                i++;
            })
        })

    document.querySelector(".title_trending").innerHTML = title + ":";

    fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        })
    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })
}

function verMasSailor() {
    let title = "Sailor Mercury";
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let suggestions = fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((images) => images.images.preview_webp.url))
        .then((urls) => {
            let i = 0;
            urls.forEach((e) => {
                document.querySelectorAll(".gif_result")[i].setAttribute("src", e)
                i++;
            })
        })

    document.querySelector(".title_trending").innerHTML = title + ":";

    fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        })
    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })
}

function verMasFabFive() {
    let title = "Fab Five";
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let suggestions = fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((images) => images.images.preview_webp.url))
        .then((urls) => {
            let i = 0;
            urls.forEach((e) => {
                document.querySelectorAll(".gif_result")[i].setAttribute("src", e)
                i++;
            })
        })

    document.querySelector(".title_trending").innerHTML = title + ":";

    fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        })
    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })
}

function verMasUnicorns() {
    let title = document.querySelectorAll(".sb_title")[3].innerHTML.slice(1);
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let suggestions = fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((images) => images.images.preview_webp.url))
        .then((urls) => {
            let i = 0;
            urls.forEach((e) => {
                document.querySelectorAll(".gif_result")[i].setAttribute("src", e)
                i++;
            })
        })

    document.querySelector(".title_trending").innerHTML = title + ":";

    fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + title + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        })
    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })
}