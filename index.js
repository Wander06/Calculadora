var primeiroNumero = document.getElementById("inputPrimeiroNumero");
var segundoNumero = document.getElementById("inputSegundoNumero");
var resultado = document.getElementById("resultado");


function somar() {
    var resultadoDaOperacao = Number(primeiroNumero.value) + Number(segundoNumero.value);
    resultado.innerHTML = "O resultado da soma é: " + resultadoDaOperacao;
    
};

function subtrair() {
    var resultadoDaOperacao = Number(primeiroNumero.value) - Number(segundoNumero.value);
    resultado.innerHTML = "O resultado da subtração é: " + resultadoDaOperacao
};

function multiplicar() {
    var resultadoDaOperacao = Number(primeiroNumero.value) * Number(segundoNumero.value);
    resultado.innerHTML = "O resultado da multiplicação é: " + resultadoDaOperacao;
};

function dividir() {
    var resultadoDaOperacao = Number(primeiroNumero.value) / Number(segundoNumero.value);
    resultado.innerHTML = "O resultado da divisão é: " + resultadoDaOperacao;
};

function limpar () {
    primeiroNumero.value = " ";
    segundoNumero.value = " ";
    resultado.innerHTML = " ";
};

function zerar() {
    primeiroNumero.value = 0;
    segundoNumero.value = 0;
    resultado.innerHTML = "O resultado da soma é: " + 0;

};