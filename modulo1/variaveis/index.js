/*
1 - Primeiro sairá '10', depois da alteração de valor sairá '10 5'
*/

/*
2 - Sairá: 10 10 10 
*/

/*
3 - para a p seria: horasTrabalhadas. Para o t: valorDoDia. 
*/


//------------------------------

/*
// 1
let nome;

let idade;

console.log(typeof nome, typeof idade)

//deram undefined, porque nenhum valor foi atribuído a elas.

nome = prompt('Qual é o seu nome?')
idade = prompt('Qual a sua idade?')

console.log( typeof nome, typeof idade)
// Assim que um valor foi atribuído, elas passaram a ser do tipo string.

console.log('Olá', nome, 'você tem', idade, 'anos.')
*/
//----------------------------------------


// 2

/*
let pergunta1 = 'Você tomou café da manhã?'
let pergunta2 = 'Você tomou água?'
let pergunta3 = 'Fez exercícios?'

let resposta1 = " - SIM"
let resposta2 = " - SIM"
let resposta3 = " - NÃO"

console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

*/

//-------------------------------------


// 3

/*
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
const valorInicial = a

a = b
b = valorInicial

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/

//---------------


//Desafio
let numero1 = Number(prompt('Primeiro número:'))
let numero2 = Number(prompt('Segundo número:'))

console.log('O primeiro número somado ao segundo número resulta em: ', numero1 + numero2)

console.log('O primeiro número multiplicado pelo segundo número resulta em: ', numero1 * numero2)