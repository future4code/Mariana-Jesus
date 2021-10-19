// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Digite uma altura:'))
  let largura = Number(prompt('Digite uma largura:'))
  
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt('Ano atual:'))
  let anoNascimento = Number(prompt('Ano de nascimento:'))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
let peso = Number(prompt('Escreva seu peso:'))
let altura = Number(prompt('Escreva sua altura:'))
function calculaIMC(peso, altura) {
  let calculo = peso / (altura * altura)
  return calculo
}console.log(calculaIMC(peso, altura))



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt('Escreva seu nome:')
  let idade = prompt('Idade:')
  let email = prompt('E-mail:')
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Escreva aprimeira cor:")
  let cor2 = prompt('Escreva a segunda cor:')
  let cor3 = prompt('Escreva a terceira cor:')
  let array = [cor1, cor2, cor3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08

function checaStringsMesmoTamanho(string1, string2) {
  const comparando = string1.length === string2.length
  return comparando
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiro = array[0]
  let ultimo = array.length -1
  let ultimoElemento = array[ultimo]
  array[0] = ultimoElemento
  array[ultimo] = primeiro

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let minuscula1 = string1.toLowerCase()
  let minuscula2 = string2.toLowerCase()
  return minuscula1 === minuscula2

}


// EXERCÍCIO 13

function checaRenovacaoRG() {
 
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
