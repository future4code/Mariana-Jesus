//1
//a) O código testa se o número é par.
//b) Para números pares.
//c) Números ímpares



//2
//a) Para imprimir o valor de uma fruta
//b) O preço da fruta Maçã é R$ 2.25
//c) Iria imprimir o valor de default.


//3
//a) Está pedindo para o usuário digitar um número
//b) Este número passou no teste. No -10, não seria imprimido.
//c) Sim, terá um erro. a variável mensagem está fora do escopo de console.log.


/////////////////////////////////////////


//1

const idade = Number(prompt('Sua idade:'))
if(idade >= 18){
    console.log('Você pode dirigir!')
}else{
    console.log('Você não pode dirigir.');
}



//2
const turno = prompt('Você estuda em qual truno?\n Digite: M (matutino), V (vespertino) ou N (noturno)')

if(turno === "M"){
    console.log('Bom dia!')
}else if(turno === "V"){
    console.log("Boa tarde!")
}else{
    console.log('Boa Noite!');
}



//3

const turno = prompt('Você estuda em qual truno?\n Digite: M (matutino), V (vespertino) ou N (noturno)')
let saudacao

switch (turno) {
    case "M":
        saudacao = "Bom dia!"
        break;
    case "V":
        saudacao = "Boa tarde!"
        break;

    default:
        saudacao = "Boa noite!"
        break;
}console.log(saudacao)



//4
const genero = prompt("Qual o gênero do filme?")
const valor = Number(prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && valor <= 15){
    console.log('Bom filme!')
}else{
    console.log('Escolha outro filme :(')
}



////////////////////////////////////////////

//Desafio
//1
const genero = prompt("Qual o gênero do filme?")
const valor = Number(prompt("Qual o valor do ingresso?"))
const lanche = prompt('Qual lanchinho vai comprar?')

if (genero === "fantasia" && valor <= 15){
    console.log(`Bom filme! Aproveite o seu ${lanche}`)
}else{
    console.log('Escolha outro filme :(')
}






