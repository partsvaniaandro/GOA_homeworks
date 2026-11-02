const numArr = [5, 10, 8, 1, 4, 112, 43576, 123]
function insertionSort(arr){
    for(let i = 0; i<arr.length; i++){
        j = i
        while (arr[j-1] > arr[j] && j > 0){
            let temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp   
            j = j-1
        }
    }
    return arr
}

console.log(insertionSort(numArr))