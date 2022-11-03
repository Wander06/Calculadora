var assert = require('node:assert');

  
var {aplicaOperacoes} = require('./index');

test("testeDeveAplicarDuasOperacoes", () => {
    var listaNumeros = [ 1, 2 ,3]

    var listaOperacoes = [ '+', '-']

    var resultadoEsperado = 0;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
    assert.strictEqual(resultado, resultadoEsperado);
  });

  test("testeDeveAplicarTresOperacoes", () => {
    var listaNumeros = [ 1, 2 ,3, 1]

    var listaOperacoes = [ '+', '-', '+']

    var resultadoEsperado = 1;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
    assert.strictEqual(resultado, resultadoEsperado);
  });

  test("testeDeveAplicarQuatroOperacoes", () => {
    var listaNumeros = [ 1, 2 ,3, 1, 1]

    var listaOperacoes = [ '+', '-', '+', '-']

    var resultadoEsperado = 0;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
    assert.strictEqual(resultado, resultadoEsperado);
  });

  test("testeDeveAplicaNOperacoes", () => {
    var listaNumeros = [ 1, 2 ,3, 4, 5, 6]

    var listaOperacoes = [ '+', '-', '+', '-', '+']

    var resultadoEsperado = 5;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
    assert.strictEqual(resultado, resultadoEsperado);
  });

  test("testeDeveAplicaNovasOperacoes", () => {
    var listaNumeros = [ 5, 3, 3, 4, 5]

    var listaOperacoes = [ '+', '-', '*', '/']

    var resultadoEsperado = 5;
    var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
    assert.strictEqual(resultado, resultadoEsperado);
  });

// function testeDeveAplicarDuasOperacoes() {
//     var listaNumeros = [ 1, 2 ,3]

//     var listaOperacoes = [ '+', '-']

//     var resultadoEsperado = 0;
//     var resultado = aplicaOperacoes(listaOperacoes,listaNumeros)
//     assert.strictEqual(resultado, resultadoEsperado);
    
    // if(resultadoEsperado == resultado ) {
    //         console.log('testeDeveAplicarDuasOperacoes passou')
    // }
    // else{
    //     console.error('testeDeveAplicarDuasOperacoes nao passou')
    // }
    // console.log(resultado)
// }
// function testeDeveAplicarTresOperacoes() {
//     var listaNumeros = [ 1, 2 ,3, 1]

//     var listaOperacoes = [ '+', '-', '+']

//     var resultadoEsperado = 1;
//     var resultado = aplicaOperacoes(listaOperacoes,listaNumeros);

//     if(resultadoEsperado == resultado ) {
//         console.log('testeDeveAplicarTresOperacoes passou')
// }
// else{
//     console.error('testeDeveAplicarTresOperacoes nao passou')
// }
//     console.log(resultado)
// };

// function testeDeveAplicarQuatroOperacoes () {
//     var listaNumeros = [ 1, 2 ,3, 1, 1]

//     var listaOperacoes = [ '+', '-', '+', '-']

//     var resultadoEsperado = 0;
//     var resultado = aplicaOperacoes(listaOperacoes,listaNumeros);

//     if(resultadoEsperado == resultado ) {
//         console.log('testeDeveAplicarQuatroOperacoes passou')
// }
// else{
//     console.error('testeDeveAplicarQuatroOperacoes nao passou')
// }
//     console.log(resultado)
// };

// function testeAplicaNOperacoes(){
//     var listaOperacoes = ['+', '-', '+','-', '+'];

//     var listaNumeros = [1, 2, 3, 4, 5, 6];

//     var resultadoEsperado = 5;
//     var resultado = aplicaOperacoes(listaOperacoes, listaNumeros)
    
//     if(resultadoEsperado == resultado ) {
//         console.log('testeAplicaNOperacoes passou')
//     }
//     else{
//     console.error('testeAplicaNOperacoes nao passou')
//     }
//     console.log(resultado)
// };

// function testeAplicaNovasOperacoes() {
//     var listaOperacoes = ['+', '-', '*', '/'];

//     var listaNumeros = [5, 3, 3, 4, 5];

//     var resultadoEsperado = 4;
//     var resultado = aplicaOperacoes(listaOperacoes, listaNumeros)
    
//     if(resultadoEsperado == resultado ) {
//         console.log('testeAplicaNovasOperacoes passou')
//     }
//     else{
//     console.error('testeAplicaNovasOperacoes nao passou')
//     }
//     console.log(resultado)
// }

// function todosOsTestes() {
//     testeDeveAplicarDuasOperacoes()
//     testeDeveAplicarTresOperacoes()
//     testeDeveAplicarQuatroOperacoes()
//     testeAplicaNOperacoes()
//     testeAplicaNovasOperacoes()
// }

// todosOsTestes()