//1 a)
// let minhaString:string = 8 Retorna um erro, falando que a let é do tipo string. 

//b)

// let meuNumero:number = 22 Fazendo um Union Type

//c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}
enum Cores {
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta',
    VERDE = 'Verde',
    AMARELO = 'Amarelo',
    LARANJA = 'Laranja',
    VERMELHO = 'Vermelho'
}

function pessoa1 (
nome: 'Mariana',
idade: 22,
corFavorita: Cores.AMARELO
){}
function pessoa2 (
nome: 'João',
idade: 22,
corFavorita: Cores.ANIL
){}
function pessoa3 (
nome: 'Pedro',
idade: 25,
corFavorita: Cores.VIOLETA
){}
function pessoa4 (
nome: 'Ana',
idade: 20,
corFavorita: Cores.LARANJA
){}