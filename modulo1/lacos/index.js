//1
//Está somando. Console.log = 10

//2
//Serão impressos os números maiores que 18
//for (let numero of lista)


//3
//Serão impressas 4 linhas, no final ficarão 4 asteriscos



///////////////////////////////////////////

//1

const bichos = Number(prompt('Você tem quantos bichinhos de estimação?'))
const nomes = []

if(bichos <= 0){
    console.log('Que pena! Você pode adotar um pet!')
}else{
    for(i = 0; i < bichos; i++){
        nomes.push(prompt('Digite o nome:'))
    }}
console.log(nomes)



//2
//a

let arrayOriginal = [2, 7, 5, 14, 28, 33]

function imprimir(){
    for (let numero of arrayOriginal) {
        console.log(numero)
}}

imprimir(arrayOriginal)


//b

function dividido(){
    for (let numero of arrayOriginal){
        console.log(numero / 10)
    }
}
dividido(arrayOriginal)


//c

let novoArray = []

    for (let numero of arrayOriginal){
        if (numero % 2 === 0){
        novoArray.push(numero)
        console.log(novoArray)
    }}


//d

let indice = []

for (let i = 0; i < arrayOriginal.length; i++){
        indice.push(`O elemento do índice ${i} é ${arrayOriginal[i]}`)
  }
  console.log(indice)



//e
let maior = 0
let menor = 50

for(let num of arrayOriginal){
    if(num > maior){
        maior = num
    }
}
for(let num of arrayOriginal){
    if(num <= menor){
        menor = num
    }
}
console.log(`O maior número é ${maior} e o menor é ${menor}`)