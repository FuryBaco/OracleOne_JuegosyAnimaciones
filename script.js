var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');
var brushColor = "black";


pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = "red";
pincel.fillRect(0,0,50,50);

pincel.fillStyle = "green";
pincel.fillRect(50,0,50,50);

pincel.fillStyle = "blue";
pincel.fillRect(100,0,50,50);

var puedoDibujar = false;

function dibujarCirculo(evento) {

  if (puedoDibujar) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    if ((x > 150 || y > 50)){
    pincel.fillStyle = brushColor;
    pincel.beginPath();
    pincel.arc(x, y, 5, 0, 2 * 3.14);
    pincel.fill();
    }
  }

}

function chooseColor(evento){
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;
  console.log(x,y) ;
  if ((x >= 0 && x <= 50) && (y >= 0 && y <= 50)){
    brushColor = "red";
  } else if ((x > 50 && x <= 100) && (y >= 0 && y <= 50)){
    brushColor = "green";
  } else if ((x > 100 && x <= 150) && (y >= 0 && y <= 50)){
    brushColor = "blue";
  }
}



pantalla.onclick = chooseColor;

pantalla.onmousemove = dibujarCirculo;

function habilitarDibujar() {

  puedoDibujar = true;
}

function deshabilitarDibujar() {

  puedoDibujar = false;
}

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;

