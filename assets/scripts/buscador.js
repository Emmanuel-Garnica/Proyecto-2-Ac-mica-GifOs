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
        });

    document.querySelector(".container_trending").scrollIntoView({
        behavior: "smooth"
    })

    // e.key === "Enter"
    // PARA QUE RECONOZCA EL ENTER
}





// let search_button = document.querySelector(".button_search");
// let boton = document.querySelector(".button_search");


function desplegarSugerencias() {

    let input = document.getElementsByTagName("input")[0];

    input.addEventListener("keyup", () => {

        let suggestions = document.querySelector(".subcontainer2_search");
        let search_button = document.querySelector(".button_search");
        let boton = document.querySelector(".button_search");

        if (input.value !== "") {

            suggestions.classList.replace("display_none", "display_flex");

            search_button.getElementsByTagName("img")[0].setAttribute("src", "./assets/images/lupa.svg");

            search_button.getElementsByTagName("img")[0].classList.add("img_bgcolor2");

            search_button.getElementsByTagName("span")[0].classList.add("img_bgcolor2");

            search_button.getElementsByTagName("span")[0].classList.add("txt_dark");

            search_button.classList.add("img_color2");

            // search_button.getElementsByTagName("img")[0].style.backgroundColor = "#F7C9F3";

            // search_button.getElementsByTagName("span")[0].style.backgroundColor = "#F7C9F3";

            // search_button.getElementsByTagName("span")[0].style.color = "#110038";

            // search_button.style.backgroundColor = "#F7C9F3";

            search_button.style.border = "1px solid #110038";

            search_button.style.boxShadow = "inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF";


            boton.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "#E6BBE2";
            })

            boton.addEventListener("mouseout", (event) => {
                event.target.style.backgroundColor = "#F7C9F3";
            })

        } else {

            suggestions.classList.replace("display_flex", "display_none");

            search_button.getElementsByTagName("img")[0].classList.remove("img_bgcolor2");

            search_button.getElementsByTagName("span")[0].classList.remove("img_bgcolor2");

            search_button.getElementsByTagName("span")[0].classList.remove("txt_dark");

        }


        // let search = document.querySelector("input").value;
        // const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";



        // let search_suggestions = fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
        //     .then((res) => res.json())
        //     .then((data) => data.data)
        //     .then((array) => array.map((images) => images.images.preview_webp.url))
        //     .then((urls) => {
        //         let i = 0;
        //         urls.forEach((e) => {
        //             document.querySelectorAll(".gif_result")[i].setAttribute("src", e)
        //             i++;
        //         })
        //     })

        // document.querySelector(".title_trending").innerHTML = search + ":";

        // fetch('http://api.giphy.com/v1/gifs/search?limit=20&q=' + search + '&api_key=' + apiKey)
        //     .then((response) => response.json())
        //     .then((data) => data.data)
        //     .then((array) => array.map((title) => title.title))
        //     .then((text) => {
        //         let i = 0;
        //         text.forEach((e) => {
        //             document.querySelectorAll(".gif_result_title")[i].innerHTML = e
        //             i++;
        //         })
        //     })

    })
}

desplegarSugerencias();