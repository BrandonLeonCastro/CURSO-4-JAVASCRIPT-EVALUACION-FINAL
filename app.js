var pantalla = document.getElementById('display')
var valora;
var valorb;
var operacion;

function escribir(numero){
  if (pantalla.innerHTML == 0) {
      pantalla.innerHTML = ""
  }

var aux= pantalla.innerHTML ;
console.log(aux);
if(aux.indexOf(".") != (-1)){
  if(numero!="."){
    pantalla.innerHTML += numero
    pantalla.innerHTML = pantalla.innerHTML.substring(0, 9)
   }
 }
else{
   pantalla.innerHTML += numero
   pantalla.innerHTML = pantalla.innerHTML.substring(0, 8)
  }
}

function reducir(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(0.95,0.95)")
}

function engrandecer(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(1,1)")
}

function borrar(numero){
  pantalla.innerHTML = 0
}

function init(){
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var on = document.getElementById('on');
  var pantalla = document.getElementById('display');
  var signo = document.getElementById('sign');

  signo.onclick = function(){
    signo_();
  }

  suma.onclick = function(num){
    valora = display.textContent;
    operacion = "+"
    limpiar();
  }
  resta.onclick = function(num){
    valora = display.textContent;
    operacion = "-"
    limpiar();
  }
  multiplicacion.onclick = function(num){
    valora = display.textContent;
    operacion = "*"
    limpiar();
  }
  division.onclick = function(num){
    valora = display.textContent;
    operacion = "/"
    limpiar();
  }
  igual.onclick = function(num){
    valorb = display.textContent;
    resolver();
  }
}

function signo_(){
  var cadena = display.innerHTML
        var i = cadena.indexOf("-")
        if (i == -1){
            display.innerHTML = "-" + cadena
        } else{
            cadena = cadena.substring(1,cadena.length)
            display.innerHTML = cadena
        }
        if(cadena == 0){
          display.innerHTML = "" + cadena
        }
}

function limpiar(){
  display.textContent = "";
}

function resetear(){
  display.textContent = "0";
  valora = 0;
  valorb = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
         res = parseFloat(valora) + parseFloat(valorb);
         break;
    case "-":
         res = parseFloat(valora) - parseFloat(valorb);
         break;
    case "*":
         res = parseFloat(valora) * parseFloat(valorb);
         break;
    case "/":
         res = parseFloat(valora) / parseFloat(valorb);
         break;

  }
  resetear();
  display.textContent = res;
  pantalla.innerHTML = pantalla.innerHTML.substring(0, 9)
}
