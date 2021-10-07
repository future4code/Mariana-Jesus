//1
//a)  10  50
//b)  Nada, pois tem que ter o console.log


//2
//a) É uma função que pede para o usuário inserir um texto, e transforma o texto em letras minúsculas e verifica se tem a palavra "cenoura", assim se tiver é retornado true ou false.

//b)
//Retorna 'true' para todas as alternativas.




//1
        // function apresentar(){
        //     console.log('Eu sou Mariana, tenho 21 anos, moro em Minas Gerais e sou estudante')
        // }
        // apresentar()


        // function apresentar(nome, idade, cidade, profissao){
        //     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
        // }
        // apresentar('Mariana', 21, 'Contagem', 'estudante')


//2
//a)

        // function somar(num1, num2){
            
        //     let soma = num1 + num2
        //     return soma
        // }
        // let resultado = somar(5, 2)
        // console.log(resultado)


//b)
        // function verificar(num1, num2){
        //     let verificando = num1 >= num2
        //     return verificando
        // }
        // let resultado = verificar(10, 5)
        // console.log(resultado)


//c

        // function verificarSeEPar(num1){
        //     let verificando = num1 % 2
        //     return verificando
        // }
        // let resultado = verificarSeEPar(10)
        // console.log(resultado)


//d

        // function receber(mensagem){
        // console.log("Tamanho da mensagem:", mensagem.length)
        // console.log(mensagem.toUpperCase())
        // }
        // receber("Finalmente terminei esse")



//3

        let num1 = Number(prompt('Digite um número:'))
        let num2 = Number(prompt('Digite outro número:'))
        function somando(num1, num2){
            const soma = num1 + num2
            return soma
        }
        function subtraindo(num1, num2){
            const subtracao = num1 - num2
            return subtracao
        }
        function multiplicando(num1, num2){
            const multiplicacao = num1 * num2
            return multiplicacao
        }
        function dividindo(num1, num2){
            const divisao = num1 / num2
            return divisao
        }
        console.log(`Números inseridos: ${num1} e ${num2}`)
        
        console.log(`Soma: ${somando(num1, num2)}`)
        
        console.log(`Diferença: ${subtraindo(num1, num2)}`)
        
        console.log(`Multiplicação: ${multiplicando(num1, num2)}`)
        
        console.log(`Divisão: ${dividindo(num1, num2)}`)






