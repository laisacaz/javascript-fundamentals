let isAtivo = false
isAtivo = 1
console.log('os verdadeiros..')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!!Infinity)

console.log('os falsos..')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
 
let nome = ''
console.log(nome || 'Desconhecido')