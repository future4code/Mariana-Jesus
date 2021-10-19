//1
//Serão impressos três arrays com 3 conteúdos. = [{nome: 'Amanda Rangel', apelido: 'Mandi', 0}]

//2
//Vai retornar 'Amanda Rangel', 'Laís Petra', 'Leticia Chijo'

//3
// Retorna dois objetos da posição 0 e 1


////////////////////////////////////////////////////


//1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //a)
 
 const pegarNome = (nome) =>{
     return nome.nome
 }
 const somenteNome = pets.map(pegarNome)
 console.log(somenteNome)
 

 //b

 const pegarSalsicha = (dog) =>{
    return dog.raca === "Salsicha"
}
const somenteSalsicha = pets.filter(pegarSalsicha)
console.log(somenteSalsicha)


//c

const pegarPoodles = (poodle) =>{
    return poodle.raca === "Poodle"
        
}

const nomePoodles = (poodle) =>{
    return poodle.nome
}

const somentePoodle = pets.filter(pegarPoodles).map(nomePoodles)
for (let nomes of somentePoodle){
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomes}`)
}



//2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

 //a)
 
const pegarNomes = (nome) =>{
    return nome.nome 
}
const somenteNome = produtos.map(pegarNomes)
 console.log(somenteNome)
 


 //b

 const nomeEPreco = produtos.map((produto) => {
     return {nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2)}
 })
 console.log(nomeEPreco)


//c

const pegarBebidas = (bebidas) =>{
    return bebidas.categoria === "Bebidas"
}
const somenteBebidas = produtos.filter(pegarBebidas)
console.log(somenteBebidas)


//d

const pegarYpe = (produto) =>{
    if((produto.nome).includes('Ypê')){
        return true
    }
}
const somenteYpe = produtos.filter(pegarYpe)
console.log(somenteYpe)


//e


const frase = somenteYpe.map((mensagem) =>{
    const nomeYpe = mensagem.nome
    const precoYpe = mensagem.preco
    return [`Compre ${nomeYpe} por ${precoYpe}`]
})

console.log(frase)



////////////////////////////////////////////////


//Desafio
//1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]


 //1

 const pegarNomes = (nome) =>{
    return nome.nome 
}
const somenteNome = pokemons.map(pegarNomes)
 console.log(somenteNome.sort())




//2
const tipos = (tipos) =>{
    return tipos.tipo
}
const somenteTipos = pokemons.map(tipos)

const novoArray = [...new Set(somenteTipos)]
console.log(novoArray)

 