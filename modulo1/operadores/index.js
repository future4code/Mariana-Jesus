// 1
/*
        a. false
        b. false
        c. true
        d. boolean
*/

//2
/*
        Ambas as variáveis não foram convertidas para Number. Portanto foi feito uma concatenação de strings.
*/

// 3
/*
        let primeiroNumero = Number(prompt("Digite um numero!"))
        let segundoNumero = Number(prompt("Digite outro numero!"))
*/




//1

/*

let idade = Number(prompt('Sua idade:'))
let idade2 = Number(prompt('Idade do seu melhor amigo:'))

console.log('Sua idade é maior do que a do seu amigo? ', idade > idade2)

console.log('Diferença de idade: ', idade - idade2)

*/



//2

/*
let par = Number(prompt('Insira um número par: '))

console.log(par % 2)

//O resto é sempre 0

//Se colocar um número ímpar, o resto da divisão é 1
*/




//3

/*
let idade = Number(prompt('Sua idade: '))

console.log('Sua idade em meses ', idade * 12)
console.log('Sua idade em dias ', idade * 365)
console.log('Sua idade em horas ', idade * 8760)
*/


//4

/*
let num1 = Number(prompt('Número um: '))
let num2 = Number(prompt('Número dois: '))

console.log('O primeiro numero é maior que segundo? ', num1 > num2)
console.log('O primeiro numero é igual ao segundo? ', num1 === num2)
console.log('O primeiro numero é divisível pelo segundo? ', num1 % num2 === 0) 
console.log('O segundo numero é divisível pelo primeiro? ', num2 % num1 === 0)

*/


//desafios

//1

//a
/*
    let a = 77;
    console.log('O valor de 77ºF em Kelvin é: ', (a - 32)*(5/9) + 273.15, 'K')

*/

//b
/*
    let b = 80
    console.log('O valor de 80ºC em Fahrenheit é: ', (b)*(9/5) + 32, 'ºF')

*/


//c-d
/*
    let c = Number(prompt('Insira um valor: '))
    console.log('Os valores de', c, 'ºC em ºF e ºK são: \n', (c)*(9/5) + 32, 'ºF \n', c + 273.15, 'ºK')
*/



//2
/*
    let valor = 0.05
    console.log('Valor a ser pago por 280 quilowatt-hora: ', 280 * valor, 'reais.')


    let valorTotal = 14
    let desconto = valorTotal - (valorTotal * 0.15) 

    console.log('Valor com desconto de 15%: ', desconto 'reais.')
*/



//3


//a
/*
        let libra = 20
        console.log(libra, 'lb equivalem a ', libra / 2.205, 'kg')
*/


//b 
/*
        let onca = 10.5
        console.log(onca, 'oz equivalem a ', onca / 3.527, 'kg')
*/


//c
/*
        let milha = 100
        console.log('100mi equivalem a', milha * 1609, 'm')
*/


//d
/*
        let pes = 50
        console.log('50ft equivalem a', pes / 3.281, 'm')
*/



//e
/*
        let galao = 103.56
        console.log('103.56gal equivalem a', galao * 379, 'l')
*/


//f
/*
        let xicaras = 450
        console.log('450 xic equivalem a', (xicaras * 6) / 25, 'l')
*/


//g
/*
        let xicaras = Number(prompt('Escreva um valor:'))
        console.log(xicaras, 'xic, equivalem a', (xicaras * 6) / 25,'l')
*/