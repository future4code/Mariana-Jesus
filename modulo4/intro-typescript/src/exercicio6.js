var operacao = function (operador, num1, num2) {
    switch (operador) {
        case 'som':
            console.log("".concat(red, "Resposta: ").concat(num1 + num2));
            break;
        case 'sub':
            console.log("".concat(red, "Resposta: ").concat(num1 - num2));
            break;
        case 'div':
            console.log("".concat(red, "Resposta: ").concat(num1 / num2));
            break;
        case 'mult':
            console.log("".concat(red, "Resposta: ").concat(num1 * num2));
            break;
        default:
            console.log("".concat(red, "Erro"));
    }
};
var red = '\u001b[31m';
var operador = process.argv[2];
var num1 = Number(process.argv[3]);
var num2 = Number(process.argv[4]);
operacao(operador, num1, num2);
