function array2d(row, col){
    let array = []
    let numplus = 1
    for (let i = 0; i < row; i++){
        let row = []
        for (let j = 0; j < col; j++){
            row.push(numplus++)
        }
        array.push(row)
    }
    return array
}
console.log(array2d(2, 2))