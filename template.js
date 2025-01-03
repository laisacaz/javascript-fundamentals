const nome = "Laísa";
const contatenacao = "Olá " + nome + "!";
const template = `
Olá 
${nome}!`; //antes da variavel colocar $ e dentro de chaves

console.log(contatenacao, template);

const up = (texto) => texto.toUpperCase();
console.log(`Ei..${up("cuidado")}!`);
