function desplegarMenu() {
    let estadoActualMenu = document.getElementsByClassName("menu")[0].style.display;

    if (estadoActualMenu !== "flex") {
        document.getElementsByClassName("menu")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("menu")[0].style.display = "none";
    }
}

// function desplegarMenu() {
//     let menuActual = document.getElementsByClassName("menu")[0].style.display;
//     let mostrarMenu = "flex";
//     let ocultarMenu = "none";
//     if (menuActual !== mostrarMenu) {
//         document.getElementsByClassName("menu")[0].style.setProperty('display', mostrarMenu);
//     } else {
//         document.getElementsByClassName("menu")[0].style.setProperty('display', ocultarMenu);
//     }
// }