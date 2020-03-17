function buscarGif() {
    let search = document.querySelector("input").value;
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let found = fetch('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + apiKey)
        .then((res) => res.json())
        .then((data) => data.data[0].images.downsized_medium.url)
        .then((url) => document.getElementById("prueba").setAttribute("src", url))
}


// .then((array) => array.forEach((gif) => {
//     console.log(gif.url)
// }))