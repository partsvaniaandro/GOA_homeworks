let arr = [-1, -3, -6, 3, 5, 6, 7, 9]
let min = arr[0]
let max = arr[0]
function higherLower(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
    }
console.log(min)
console.log(max)
}
higherLower(arr)