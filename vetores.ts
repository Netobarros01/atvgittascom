// const frutas = ["maca", "banana", "uva", "laranja"]

// frutas.push  ("manga")
// frutas.shift ()    

// console.log (frutas)
// console.log (frutas [1]);
// console.log (frutas.length)



// const precos: number[] = [50, 100, 200, 80, 150]
// const precoscomdesconto: number[]= precos.map ((preco) => preco* 0.9)


// console.log (precos)
// console.log(precoscomdesconto)


// const usuarios: = qualObjeto?
// { 
//     nome: "joao "
//     idade: 7.
//     ativo: true
// }

// type usuario = {
//     nome: string. 
//     idade: number. 
//     ativo: boolean. 
//     email?: string  ImterrogaçaoDeixaAProdiedadeOpcional. 
//     cpf:  podeSerStringOuNumber

//     //NULL (SEM VALOR). UNDERFILE SEM VALOR,SE NADA
// }

// type Aluno = {
//     nome: string;
//     idade: number;
//     curso: {
//         moduloAtual: string;
//         faltas: number;
//     };
//     nota?: number;
// };

// const aluno: Aluno = {
//     nome: "Neto",
//     idade: 27,
//     curso: {
//         moduloAtual: "logica de programaçao",
//         faltas: 2
//     }
// };

// console.log("Objeto inicial:");
// console.log(aluno);


// aluno.idade = 28;


// aluno.nota = 9.5;

// console.log("Objeto atualizado:");
// console.log(aluno);

const usuarios = [
    {
        id: 1,
        nome: "Carlos Silva",
        idade: 22,
        email: "carlos@email.com",
        cpf: "123.456.789-00",
        telefone: "81999990001",
        ativo: true
    },
    {
        id: 2,
        nome: "Ana Souza",
        idade: 19,
        email: "ana@email.com",
        cpf: null,
        telefone: "81999990002",
        ativo: true
    },
    {
        id: 3,
        nome: "Pedro Lima",
        idade: 30,
        email: "pedro@email.com",
        cpf: "987.654.321-00",
        telefone: "81999990003",
        ativo: true
    },
    {
        id: 4,
        nome: "Mariana Costa",
        idade: 27,
        email: "mariana@email.com",
        cpf: null,
        telefone: "81999990004",
        ativo: true
    },
    {
        id: 5,
        nome: "Lucas Almeida",
        idade: 25,
        email: "lucas@email.com",
        cpf: "111.222.333-44",
        telefone: "81999990005",
        ativo: true
    },
    {
        id: 6,
        nome: "Fernanda Rocha",
        idade: 21,
        email: "fernanda@email.com",
        cpf: null,
        telefone: "81999990006",
        ativo: true
    }
];

const usuariosAtualizados = usuarios.map(usuario => ({
    ...usuario,
    ativo: usuario.cpf !== null
}));

console.log(usuariosAtualizados);
