function checkIfSorted(arr){
    for(let i= 1; i<arr.length; i++){
        if(arr[i-1] > arr[i]){
            return false
        }
    }
    return true
}

function shuffle(arr){
    for(let i = 0; i<arr.length - 1; i++){
        const j = Math.floor(Math.random() * (arr.length - i)) + i
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

function bogoSort(arr){
    while(!checkIfSorted(arr)){
        shuffle(arr)
    }
    return arr
}

console.log(bogoSort([1, 6, 5, 3, 7, 8, 124, 58]))