function reverse(){
    let input:string = process.argv[2]
    return input.split('').reverse().join('')
}
console.log(reverse())