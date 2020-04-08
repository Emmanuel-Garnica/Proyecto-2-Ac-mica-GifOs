let contenedor_gifos = document.querySelector(".content_myGifOs_boxes");
let my_gifos_box = document.createElement("img");

my_gifos_box.src = "https://media0.giphy.com/media/eK0lwqSl54Gqynn3nA/giphy.gif?cid=7ac3c700763690cbc3228aef6bd5a6615e24f91991d9bacb&rid=giphy.gif";
my_gifos_box.className = "myGifOs_box";
my_gifos_box.alt = "Imagen de mi gif grabado";

contenedor_gifos.appendChild(my_gifos_box);