function checaRenovacaoRG(anoNascimento:number, anoEmissao:number) {
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - Number(anoNascimento);
    var tempoCarteira = anoAtual - Number(anoEmissao);
    var cond1 = idade <= 20 && tempoCarteira >= 5;
    var cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    var cond3 = idade > 50 && tempoCarteira >= 15;
    return (cond1 || cond2 || cond3);
}
console.log(checaRenovacaoRG(1990, 2010));