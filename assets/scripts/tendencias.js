function suggestionsGif() {
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let suggestions = fetch('http://api.giphy.com/v1/gifs/trending?limit=20&api_key=' + apiKey)
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

    fetch('http://api.giphy.com/v1/gifs/trending?limit=20&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerText = e
                i++;
            })
        })
}
suggestionsGif();