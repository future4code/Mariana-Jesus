function reverse() {
    var input = process.argv[2];
    return input.split('').reverse().join('');
}
console.log(reverse());
