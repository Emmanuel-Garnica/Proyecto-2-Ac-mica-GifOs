function desplegarMenu() {
    let estadoActualMenu = document.getElementsByClassName("menu")[0].style.display;

    if (estadoActualMenu !== "flex") {
        document.getElementsByClassName("menu")[0].style.display = "flex";
    } else {
        document.getElementsByClassName("menu")[0].style.display = "none";
    }
}