function testeDeveAplicarDuasOperacoes() {
    var listaNumeros = [ 1, 2 ,3]

    var listaOperacoes = [ '+', '-']

    var resultadoEsperado = 0;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
    
    if(resultadoEsperado == resultado ) {
            console.log('passou')
    }
    else{
        console.error('nao passou')
    }

}
function testeDeveFazerTresOperacoes () {
    
};

