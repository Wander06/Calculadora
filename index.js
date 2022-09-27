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

function inserir (numero)  {
    var numero1 = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero1 + numero;
    
}

function teste() {
    var listaNumeros = [ 1, 2 ,3]

    var listaOperacoes = [ '+', '-']

    var resultadoNumeros = [3,3]
    var resultadoOperacoes = ['-']

    var primeiroNumero = listaNumeros[0];
    var segundoNumero = listaNumeros[1];
    var primeiroOperacao = listaOperacoes[0];
    var resultado ;
    
    if(primeiroOperacao == '+') {
        resultado = primeiroNumero + segundoNumero;
    }


    

     
    if(listaNumeros[0] == resultadoNumeros[0] && 
        listaNumeros[1] == resultadoNumeros[1] &&
        listaOperacoes[0] == resultadoOperacoes[0] ) {
            console.log('passou')
    }
    else{
        console.error('nao passou')
    }

}