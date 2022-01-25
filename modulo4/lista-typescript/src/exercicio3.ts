enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filmes = {
    nome: string,
    ano: number,
    genero: GENERO,
    nota?: number
}

const filme: Filmes[] = [
    {
    nome: 'Star Wars',
    ano: 1977,
    genero: GENERO.ACAO,
    nota: 10
    },
    {
    nome: 'O casamento do meu melhor amigo',
    ano: 1997,
    genero: GENERO.COMEDIA
    },
    {
    nome: 'Como estrelas na terra',
    ano: 2007,
    genero: GENERO.ROMANCE
    },
    {
    nome: 'Uma noite de crime',
    ano: 2013,
    genero: GENERO.TERROR
    },
    {
    nome: 'Mudança de hábito',
    ano: 1992,
    genero: GENERO.COMEDIA
    }

]
console.log(filme)