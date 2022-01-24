//2 a)

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeDados = {
    numeros: number[]
    obterEstatisticas: (numeros: number[])=>{
        maior: number, 
        menor:number, 
        media:number
    }
}

const amostraDeIdades:amostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: obterEstatisticas

}
console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))