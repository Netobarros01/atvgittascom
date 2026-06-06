import PromptSync from "prompt-sync";
const prompt=PromptSync();

let numero= Number(prompt("tabuada"));

for (let i = 1; i <= 10; i++) {
    console.log(`resultado ${numero}x${i}=${numero * i}`);
}