import PromptSync from "prompt-sync";

const prompt = PromptSync();

const valorOriginal: number = Number(
  prompt("Digite o valor da sua compra: ")
);

const quantidadeItens: number = Number(
  prompt("Digite quantos itens está levando: ")
);

const tipoCliente: string = prompt(
  "Digite o tipo do cliente (vip/premium/comum): "
).toLowerCase();

let percentualDesconto: number = 0;

if (tipoCliente === "vip") {

  if (valorOriginal > 500) {
    percentualDesconto = 0.20;
  } else {
    percentualDesconto = 0.10;
  }

} else if (tipoCliente === "premium") {

  if (valorOriginal > 300) {
    percentualDesconto = 0.15;
  } else {
    percentualDesconto = 0.05;
  }

} else if (tipoCliente === "comum") {

  if (quantidadeItens > 10) {
    percentualDesconto = 0.05;
  }

} else {

  console.log("Tipo de cliente inválido.");
  

}

const valorDoDesconto: number =
  valorOriginal * percentualDesconto;

const valorFinal: number =
  valorOriginal - valorDoDesconto;

console.log("\n--- EXTRATO DA COMPRA ---");

console.log(`Tipo de Cliente: ${tipoCliente.toUpperCase()}`);

console.log(
  `Valor Original: R$ ${valorOriginal.toFixed(2)}`
);

console.log(
  `Desconto Aplicado: ${percentualDesconto * 100}% ` +
  `(Economia de R$ ${valorDoDesconto.toFixed(2)})`
);

console.log(
  `Valor Final: R$ ${valorFinal.toFixed(2)}`
);

console.log("-------------------------\n");
s