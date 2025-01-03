const prod1 = {} //para de chaves significa q é um objeto,
//[] colchetes significa que é um array
prod1.nome = 'Celular'

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        nome:'objeto dentro do objeto',
        id: 2
    }
}
let arrayTeste = []
let objectTeste = {} //colocando objetos dentro do array
objectTeste.nome = 'testando'

arrayTeste.push(objectTeste)
arrayTeste.push(prod2)
console.log(arrayTeste)

prod3 = {}
prod3.nome = 'teste'
console.log(prod3)


