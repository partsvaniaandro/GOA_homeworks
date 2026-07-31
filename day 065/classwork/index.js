function strtonum(inp){
    let numarray = []
    inp = String(inp);
    for(let i = 0; i<inp.length; i++){
        numarray.push(Number(inp[i]))
    }
    return numarray
}

console.log(strtonum(123))