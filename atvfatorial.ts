import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero: number = Number(
  prompt("Digite um número: ")
);

let fatorial: number = 1;

for (let i = numero; i >= 1; i--) {
  
  fatorial = fatorial * i;

  console.log("Fatorial =", fatorial);
}
