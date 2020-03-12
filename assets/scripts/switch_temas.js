function cambiarATemaDay() {
    let tema = document.querySelectorAll(".night");
    for (let i = 0; i < tema.length; i++) {
        tema[i].classList.replace("night", "day");

    }

    let logo = document.getElementsByClassName("logo")[0];
    let dropdown = document.getElementsByTagName("img")[1];

    logo.setAttribute("src", "assets/images/gifOF_logo.png");
    dropdown.setAttribute("src", "assets/images/dropdown.svg");
}

function cambiarATemaNight() {
    let tema = document.querySelectorAll(".day");
    for (let i = 0; i < tema.length; i++) {
        tema[i].classList.replace("day", "night");

    }

    let logo = document.getElementsByClassName("logo")[0];
    let dropdown = document.getElementsByTagName("img")[1];

    logo.setAttribute("src", "assets/images/gifOF_logo_dark.png");
    dropdown.setAttribute("src", "assets/images/dropdown-dark.png");
}