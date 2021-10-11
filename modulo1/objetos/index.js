//1
/*
console.log(filme.elenco[0]) = "Matheus Nachtergaele"

console.log(filme.elenco[filme.elenco.length - 1]) = "Virginia Cavendish"

console.log(filme.transmissoesHoje[2]) = {canal: "Globo", horario: "14h"}
*/


//2
/*
a)
console.log(cachorro) = const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

console.log(gato) = const gato = {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}


console.log(tartaruga) = const tartaruga = {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}


b)
Faz uma cópia do objeto
*/


//3
//a)
/*
console.log(minhaFuncao(pessoa, "backender")) = false.

console.log(minhaFuncao(pessoa, "altura")) = undefined.
*/

//b)
/* 
    false, por que ele não é backender
    undefined, por que não existe altura.
*/





//1
//a)

    const objeto = {
    nome: "Mariana",
    apelidos: ["Mari", "Melry", "Marinana"]
}

const copiaObjeto = {...objeto, apelidos: ["Ana", "Nana", "Ma"]}

function exercicio(entrada){
    
    return `Eu sou ${entrada.nome}, mas pode me chamar de: ${entrada.apelidos[0]}, ${entrada.apelidos[1]} ou ${entrada.apelidos[2]}`
}
console.log(exercicio(objeto))
console.log(exercicio(copiaObjeto))



//2

 const objeto1 = {
 nome: "Mariana",
 idade: 21,
 profissao: "Estudante"
 }

const objeto2 = {
    nome: "Jhonatan",
    idade: 29,
    profissao: "Contador"
    
 }

 function minhaFuncao(pessoa1){


return [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.nome.length]
 }
 
 function minhaFuncao2(pessoa2){
    
    
    return [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.nome.length]
     }

console.log(minhaFuncao(objeto1))
console.log(minhaFuncao2(objeto2))





//3

const carrinho = []
const frutas1 = {
    nome: "Banana",
    disponibilidade: true
}

const frutas2 = {
    nome: "Maracujá",
    disponibilidade: true
}

const frutas3 = {
    nome: "Morango",
    disponibilidade: true
}

function passar(fruta){
    carrinho.push(fruta)
    return fruta
}
console.log(passar(frutas1))
console.log(passar(frutas2))
console.log(passar(frutas3))

console.log(carrinho)




