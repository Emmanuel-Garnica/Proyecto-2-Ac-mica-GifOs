function buscarGif() {
    let search = document.querySelector("input").value;
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let found = fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + apiKey)
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
    // .then((data) => data.data[0].images.downsized_medium.url)
    // .then((url) => document.getElementById("prueba").setAttribute("src", url))
}


// .then((array) => array.forEach((gif) => {
//     console.log(gif.url)
// }))

// window.onload = function trendingGifs() {

// }