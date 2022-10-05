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
    var resultadoFinal ;
    var proximoNumero;
    var operacao;
    
    if(resultadoFinal == undefined) {
        resultadoFinal = listaNumeros[0]
    }

    for(i=0; i< listaOperacoes['length']; i++) {    
        proximoNumero = listaNumeros[i+1]; 
        operacao = listaOperacoes[i];
            if(operacao == '+') {
                resultadoFinal = resultadoFinal + proximoNumero;
            }
            if(operacao == '-') {
                resultadoFinal = resultadoFinal - proximoNumero;
            }
    }


    return resultadoFinal;
}
