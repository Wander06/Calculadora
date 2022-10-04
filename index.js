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

//Nova calculadora

function inserir (numero)  {
    var numero1 = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero1 + numero;
    
}

function aplicaOperacoes (listaOperacoes, listaNumeros) {
    var primeiroNumero = listaNumeros[0];
    var segundoNumero = listaNumeros[1];
    var terceiroNumero = listaNumeros[2];
    var quartoNumero = listaNumeros[3];
    var quintoNumero = listaNumeros[4];
    var primeiroOperacao = listaOperacoes[0];
    var segundaOperacao = listaOperacoes[1];
    var terceiraOperacao = listaOperacoes[2];
    var quartaOperacao = listaOperacoes[3];
    var primeiroResultado ;
    var resultadoFinal ;
    
    if(primeiroOperacao == '+' ) {
        primeiroResultado = primeiroNumero + segundoNumero;
    }
    if(segundaOperacao == '-') {
        resultadoFinal = primeiroResultado - terceiroNumero;
    }
    if(terceiraOperacao && terceiraOperacao == '+') {
        resultadoFinal = resultadoFinal + quartoNumero;
    }
    if(quartaOperacao && quartaOperacao == '-') {
         resultadoFinal = resultadoFinal - quintoNumero
    }


    return resultadoFinal;
}
