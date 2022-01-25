function funcao(){
    let nome:string = 'Mariana'
    let dataNascim:string = '03/01/2000'

    
    let data:string[] = dataNascim.split('/')
    return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}`
}
console.log(funcao())