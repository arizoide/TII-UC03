var numero = 0;
var operacao = "";
var resul = 0;
function somar(){
    var input = document.getElementById("numero");
    operacao = 'soma';
    numero = parseInt(input.value);
    input.value = "";
    input.focus();
}

function subtrair(){
    var input = document.getElementById("numero");
    operacao = 'subtracao';
    numero = parseInt(input.value);
    input.value = "";
}

function multiplicar(){
    var input = document.getElementById("numero");
    operacao = 'multiplicacao';
    numero = parseInt(input.value);
    input.value = "";
}

function dividir(){
    var input = document.getElementById("numero");
    operacao = 'dividir';
    numero = parseInt(input.value);
    input.value = "";
}

function resultado(){
    var input = document.getElementById("numero");
    if(operacao == 'soma'){
        resul = parseInt(input.value) + numero;
    } else if (operacao == 'subtracao'){
        resul = numero - parseInt(input.value);
    } else if (operacao == 'multiplicacao'){
        resul = numero * parseInt(input.value);
    } else if (operacao == 'dividir'){
        if (parseInt(input.value) == 0){
            resul = 'Impossível dividir por zero';
        } else {
            resul = numero / parseInt(input.value);
        }
    }
    document.getElementById("resposta").innerHTML = resul
    resul = 0;
    numero = 0;
    operacao = "";
    input.value = "";
} 

document.addEventListener("keypress", function(e) {
    if(e.key === '+') {
        somar();        
    } else if(e.key === '-') {
        subtrair();
    } else if(e.key === '*') {
        multiplicar();
    } else if(e.key === '/') {
        dividir();
    } else if(e.key === '=' || e.key === 'Enter') {
        resultado();
    }
})

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('numero');
    if (el) {
      el.addEventListener('click', (event) => {
          document.getElementById('resultado').style.transform = 'rotate(180deg)';
          document.getElementById('resultado').style.transform = 'scaleY(1.5)';
          document.getElementById('resultado').style.transform = 'scaleX(1.5)';
          document.getElementById('resultado').style.transitionDuration = '2s';
      });
    }
});