function tratarErroELancar(erro) {
  throw new Error("...");
}

function imprimirNomeGritando(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("final");
  }
}

const obj = { nome: "Laísa " };
imprimirNomeGritando(obj);
