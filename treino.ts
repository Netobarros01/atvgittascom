// // import PromptSync from "prompt-sync";

// // const prompt = PromptSync();

// // let nota: number = Number(prompt("Digite a nota do aluno: "));

// if (nota >= 7) {
//     console.log("Aprovado");
// } else if (nota >= 5) {
//     console.log("Recuperação");
// } else {
//     console.log("Reprovado");
// }



import PromptSync from "prompt-sync";

const prompt = PromptSync();

let valorcompra: number = Number(prompt(" qual o valor da sua comprar "));

if (valorcompra >=300){
    console.log("voce tem um desconto de 30%");
    
} else if (valorcompra >=150){
    console.log("voce tem 15% de desconto");
    
} else if  (valorcompra >=80) {
    console.log ("voce tem 5% de desconto ")
}
else {
    console.log("voce nao tem desconto")
}