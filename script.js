var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);
var colores = ["blue", "red", "green"];
var indiceColorActual = 0; // comienza con blue

function exhibirAlerta(evento) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;
  console.log(evento);
  alert("El click que hizo esta en las coordenadas " + x + "," + y)
}

function dibujarCirculo(evento, color) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;


  pincel.fillStyle = colores[indiceColorActual];
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.1416);
  pincel.fill();

  console.log("El click que hizo esta en las coordenadas " + x + "," + y);

}

function alterarColor() {
  indiceColorActual++;
  if (indiceColorActual >= colores.length) {
    indiceColorActual = 0; //vuelve para el primer color, blue
  }
  return false; //menú contextual padrón de `canvas` no sea exhibido
}

pantalla.oncontextmenu = alterarColor;
pantalla.onclick = dibujarCirculo;