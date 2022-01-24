function checaRenovacaoRG() {
    var anoAtual = Number(process.argv[2]);
    var anoNascimento = Number(process.argv[3]);
    var anoEmissao = Number(process.argv[4]);
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    var cond1 = idade <= 20 && tempoCarteira >= 5;
    var cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    var cond3 = idade > 50 && tempoCarteira >= 15;
    return (cond1 || cond2 || cond3);
}
console.log(checaRenovacaoRG());
