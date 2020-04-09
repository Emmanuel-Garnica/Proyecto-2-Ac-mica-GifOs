// document.querySelector("input").addEventListener("keyup", (variable) => {

//     if (variable.key === "Enter") {
//         document.querySelector(".subcontainer2_search").style.display = "none";
//         buscarGif();
//     }

// })

function buscarGif() {
    let search = document.querySelector("input").value;
    const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";
    let found = fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
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

    fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        });

    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })

    document.querySelector(".subcontainer2_search").classList.replace("display_flex", "display_none");

}

function desplegarSugerencias() {

    let input = document.getElementsByTagName("input")[0];

    input.addEventListener("keyup", (variable) => {

        let suggestions = document.querySelector(".subcontainer2_search");
        let search_button = document.querySelector(".button_search");
        let boton = document.querySelector(".button_search");

        if (input.value !== "") {

            suggestions.classList.replace("display_none", "display_flex");

            search_button.getElementsByTagName("img")[0].setAttribute("src", "./assets/images/lupa.svg");

            search_button.getElementsByTagName("img")[0].style.backgroundColor = "#F7C9F3";

            search_button.getElementsByTagName("span")[0].style.backgroundColor = "#F7C9F3";

            search_button.getElementsByTagName("span")[0].style.color = "#110038";

            search_button.style.backgroundColor = "#F7C9F3";

            search_button.style.border = "1px solid #110038";

            search_button.style.boxShadow = "inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF";

            // once con booleano
            boton.addEventListener("mouseover", (event) => {

                event.target.style.backgroundColor = "#E6BBE2";

            })

            boton.addEventListener("mouseout", (event) => {

                event.target.style.backgroundColor = "#F7C9F3";

            })

        } else {

            suggestions.classList.replace("display_flex", "display_none");

            search_button.getElementsByTagName("img")[0].setAttribute("src", "./assets/images/lupa_inactive.svg");

            search_button.getElementsByTagName("img")[0].style.backgroundColor = "#E6E6E6";

            search_button.getElementsByTagName("span")[0].style.backgroundColor = "#E6E6E6";

            search_button.getElementsByTagName("span")[0].style.color = "#B4B4B4";

            search_button.style.backgroundColor = "#E6E6E6";

            search_button.style.border = "1px solid #808080";

            search_button.style.boxShadow = "inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF";

            search_button.getElementsByTagName("img")[0].classList.remove("img_bgcolor2");

            search_button.getElementsByTagName("span")[0].classList.remove("img_bgcolor2");

            search_button.getElementsByTagName("span")[0].classList.remove("txt_dark");

        }

    })
}

desplegarSugerencias();

const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";

function sugerenciaUno() {

    let search = document.getElementById("sugerencia1").innerHTML;

    fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
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

    document.querySelector(".title_trending").innerHTML = search + ":";

    fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        });

    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })

    document.querySelector(".subcontainer2_search").classList.replace("display_flex", "display_none");

    document.getElementsByTagName("input")[0].value = search;
}

function sugerenciaDos() {

    let search = document.getElementById("sugerencia2").innerHTML;

    fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
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

    document.querySelector(".title_trending").innerHTML = search + ":";

    fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        });

    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })

    document.querySelector(".subcontainer2_search").classList.replace("display_flex", "display_none");

    document.getElementsByTagName("input")[0].value = search;
}

function sugerenciaTres() {

    let search = document.getElementById("sugerencia3").innerHTML;

    fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
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

    document.querySelector(".title_trending").innerHTML = search + ":";

    fetch('https://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
        .then((response) => response.json())
        .then((data) => data.data)
        .then((array) => array.map((title) => title.title))
        .then((text) => {
            let i = 0;
            text.forEach((e) => {
                document.querySelectorAll(".gif_result_title")[i].innerHTML = e
                i++;
            })
        });

    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })

    document.querySelector(".subcontainer2_search").classList.replace("display_flex", "display_none");

    document.getElementsByTagName("input")[0].value = search;
}