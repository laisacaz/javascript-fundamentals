const valores = [7.7,8.9,6.3]
console.log(valores [0], valores[3])
console.log(valores.length) //quantidade de valores no array
valores.push({id: 3}, false, null, 'teste') //inserindo um objeto no array
console.log(valores)

console.log(valores.pop()) //tira ultimo valor do array
delete valores[0] //deleta valor
console.log(valores)