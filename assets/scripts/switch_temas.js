let logo = document.getElementsByClassName("logo")[0];
let dropdown = document.getElementsByTagName("img")[1];
let vistaMenu = document.querySelector(".menu");

function cambiarATemaDay() {
    let tema = document.querySelectorAll(".night");
    for (let i = 0; i < tema.length; i++) {
        tema[i].classList.replace("night", "day");

    }

    logo.setAttribute("src", "assets/images/gifOF_logo.png");
    dropdown.setAttribute("src", "assets/images/dropdown.svg");
    vistaMenu.style.display = "none";

}

function cambiarATemaNight() {
    let tema = document.querySelectorAll(".day");
    for (let i = 0; i < tema.length; i++) {
        tema[i].classList.replace("day", "night");

    }

    logo.setAttribute("src", "assets/images/gifOF_logo_dark.png");
    dropdown.setAttribute("src", "assets/images/dropdown-dark.png");
    vistaMenu.style.display = "none";

}