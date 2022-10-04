function testeDeveAplicarDuasOperacoes() {
    var listaNumeros = [ 1, 2 ,3]

    var listaOperacoes = [ '+', '-',]

    var resultadoEsperado = 0;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
    
    if(resultadoEsperado == resultado ) {
            console.log('passou')
    }
    else{
        console.error('nao passou')
    }

}
function testeDeveAplicarTresOperacoes() {
    var listaNumeros = [ 1, 2 ,3, 1]

    var listaOperacoes = [ '+', '-', '+']

    var resultadoEsperado = 1;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros);

    if(resultadoEsperado == resultado ) {
        console.log('passou')
}
else{
    console.error('nao passou')
}
};

function testeDeveAplicarQuatroOperacoes () {
    var listaNumeros = [ 1, 2 ,3, 1, 1]

    var listaOperacoes = [ '+', '-', '+', '-']

    var resultadoEsperado = 0;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros);

    if(resultadoEsperado == resultado ) {
        console.log('passou')
}
else{
    console.error('nao passou')
}
};

function testeAplicaNOperacoes(){
    var listaOperacoes = ['+', '-','+','-','+'];
    var listaNumeros = [1, 2, 3, 4, 5, 6];
    var resultadoFinal;
    var proximoNumero;
    var operacao;

    if(resultadoFinal == undefined) {
        resultadoFinal = listaNumeros[0]
    }

    for(i=0; i< listaOperacoes['length']; i++) {    
        proximoNumero = listaNumeros[i+1]  
        operacao = listaOperacoes[i]
        //resultadoFinal = resultadoFinal + operacao + proximoNumero 
        // console.log(proximo)
        // console.log(operacao)
        //console.log(resultadoFinal)

            if(operacao == '+') {
                resultadoFinal = resultadoFinal + proximoNumero
                console.log('O resultado da soma é: '+resultadoFinal)
            }
            if(operacao == '-') {
                resultadoFinal = resultadoFinal - proximoNumero
                console.log('O resultado subtração é: ' + resultadoFinal)
            }
        
    }

    return resultadoFinal;

}

