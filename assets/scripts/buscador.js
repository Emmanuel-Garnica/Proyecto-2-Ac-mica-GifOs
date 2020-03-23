function buscarGif() {
    let search = document.querySelector("input").value;
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let found = fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
        .then((res) => res.json())
        .then((data) => data.data)
        .then((array) => array.map((images) => images.images.preview_webp.url))
        .then((urls) => {
            let i = 0;
            urls.forEach((e) => {
                document.querySelectorAll(".gif_result")[i].setAttribute("src", e)
                i++;
            })
        })

    document.querySelector(".title_trending").innerHTML = search + ":";

    fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
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
}

// window.onload = function trendingGifs() {

// }