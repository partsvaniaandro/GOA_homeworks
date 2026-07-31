let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = 0
function calc(){
    result = 0
    array.forEach(el =>{
        result += el
    })
    return result
}
calc()
