//1) a) Através do process.argv


// b) c)
let red = '\u001b[31m'
let nome = process.argv[2];
let idade = Number(process.argv[3]);

const resultado = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7.}`;



console.log(`${red}${resultado}`);