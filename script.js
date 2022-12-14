

function dibujarCuadrado(x,y,color) {
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = color;
  pincel.fillRect(x, y, 50, 50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, 50, 50);
}

var x = 0;
while (x < 600) {
  dibujarCuadrado(x,0,"green");
  dibujarCuadrado(x,50,"yellow");
  dibujarCuadrado(x,100,"red");
  x = x + 50;
}




