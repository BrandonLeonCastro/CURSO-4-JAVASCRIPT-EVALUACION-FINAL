var valora;
var valorb;
var operacion;

function init(){
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var punto = document.getElementById('punto');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var on = document.getElementById('on');
  var signo = document.getElementById('sign');
  var pantalla = document.getElementById('display');

  uno.onclick = function(num){
    display.textContent = display.textContent + "1";
  }
  dos.onclick = function(num){
    display.textContent = display.textContent + "2";
  }
  tres.onclick = function(num){
    display.textContent = display.textContent + "3";
  }
  cuatro.onclick = function(num){
    display.textContent = display.textContent + "4";
  }
  cinco.onclick = function(num){
    display.textContent = display.textContent + "5";
  }
  seis.onclick = function(num){
    display.textContent = display.textContent + "6";
  }
  siete.onclick = function(num){
    display.textContent = display.textContent + "7";
  }
  ocho.onclick = function(num){
    display.textContent = display.textContent + "8";
  }
  nueve.onclick = function(num){
    display.textContent = display.textContent + "9";
  }
  cero.onclick = function(num){
    display.textContent = display.textContent + "0";
  }
  on.onclick = function(num){
    resetear();
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

function limpiar(){
  display.textContent = "";
}

function resetear(){
  display.textContent = "";
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
}
