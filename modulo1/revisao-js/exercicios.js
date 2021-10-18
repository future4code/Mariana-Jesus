// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
   return array.length
}retornaTamanhoArray([3, 2, 1, 4, 7])



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.slice(0).reverse()
}
retornaArrayInvertido([0,8,23,16,10,15,41,12,13])


// EXERCÍCIO 03

const comparar = (a, b) =>{
    return a - b
}

function retornaArrayOrdenado(array) {
    const comparacao = comparar
  return array.sort(comparacao)
}retornaArrayOrdenado([36, 12, 56, 7, 3])



// EXERCÍCIO 04

function retornaNumerosPares(array) {
    array = array.filter(numerosPares)
    return array
}

const numerosPares = (par) => {
    return par % 2 === 0
}
retornaNumerosPares([1, 2, 3, 4])

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const num = array.filter((item) =>{
        return item % 2 === 0
    })
    const numEle = num.map((ele)=>{
        return ele * ele
    })
    return numEle
}
retornaNumerosParesElevadosADois()
/*
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i=0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i]
        }
    }
  return maior
}
retornaMaiorNumero([1, 2, 3])
*/
// EXERCÍCIO 07



function retornaObjetoEntreDoisNumeros(num1, num2) {
    let arrayOrdenado = array.sort((a, b) => a - b)

    let maiorNumero = arrayOrdenado[arrayOrdenado.length - 2]

    let menorNumero = arrayOrdenado[1]
    

 
}
retornaObjetoEntreDoisNumeros(15,30)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}