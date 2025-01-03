/*  se estiver executando no front - browser
    se estiver executando no back - node

    no console do navegador caso declarar uma const ou let
    nao vai para o objeto global window do navegador, já o var vai
*/

let a = 3; // não é exportada, é local
abc = 3; // sem var ou let, está automaticamente colocando no global, não faça isso.
this.c = 456; // está no global
console.log(module.exports.c);
