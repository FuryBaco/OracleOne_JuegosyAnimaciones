var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var radio = 10;
var randomX;
var randomY;

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

function dibujarCircunferencia(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

function dibujarObjetivo(x, y) {
  dibujarCircunferencia(x, y, radio + 20, "red");
  dibujarCircunferencia(x, y, radio + 10, "white");
  dibujarCircunferencia(x, y, radio, "red");
}

function randomPos(maximo) {
  return Math.floor(Math.random() * (maximo - 40)) + 40;
}

randomX = randomPos(pantalla.width - (radio + 20));
randomY = randomPos(pantalla.height - (radio + 20));


function actualizarObjetivo() {
  limpiarPantalla();
  randomX = randomPos(pantalla.width - (radio + 20));
  randomY = randomPos(pantalla.height - (radio + 20));
  dibujarObjetivo(randomX, randomY);
  console.log(randomX, randomY);
}

setInterval(actualizarObjetivo, 1000);

function shoot(evento) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;
  if ((x < randomX + radio) &&
    (x > randomX - radio) &&
    (y < randomY + radio) &&
    (y > randomY - radio)) {
    alert("You win, nice shoot")
  }
}

pantalla.onclick = shoot;


// var x = 0;
// var sentido = 1;

// function actualizarPantalla(){
//   limpiarPantalla();
//   if (x >= pantalla.width){
//     sentido = -1;
//   } else if(x <= 0 ){
//     sentido = 1;
//   }
//   dibujarCircunferencia(x, 20, 10);
//   x += sentido;
// }


// setInterval(actualizarPantalla, 10);


