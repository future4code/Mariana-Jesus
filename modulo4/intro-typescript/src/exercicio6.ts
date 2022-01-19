
const operacao = (operador:string, num1:number, num2:number)=>{
    switch(operador){
        case 'som':
            console.log(`${red}Resposta: ${num1 + num2}`)
            break;
        case 'sub':
            console.log(`${red}Resposta: ${num1 - num2}`)
            break;
        case 'div':
            console.log(`${red}Resposta: ${num1 / num2}`)
            break;
        case 'mult':
            console.log(`${red}Resposta: ${num1 * num2}`)
            break;
        default:
            console.log(`${red}Erro`)
    }
}
let red = '\u001b[31m'
const operador = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
operacao(operador, num1, num2);
