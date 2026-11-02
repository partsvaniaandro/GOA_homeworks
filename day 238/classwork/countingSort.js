const unsortedArr = [6, 1, 7, 1, 3, 5, 3, 6, 1, 5, 0, 3, 5, 1, 7, 2, 2, 7, 5, 3, 6, 0]

function findBiggest(arr){
    let biggest = arr[0]
    for(let i = 1; i< arr.length; i++){
        if(arr[i] > biggest){
            biggest = arr[i]
        }
    }
    return biggest
}
const biggestNum = findBiggest(unsortedArr)
const counts = new Array(biggestNum + 1).fill(0)

function countingSortNumbers(arr, counts){
    for(let i = 0; i < arr.length; i++){
        counts[arr[i]] += 1
    }
    const sorted = []
    for(let i = 0; i < counts.length; i++){
        for(let j = 0; j < counts[i]; j++){
            sorted.push(i)
        }
    }
    return sorted
}

console.log(countingSortNumbers(unsortedArr, counts))
