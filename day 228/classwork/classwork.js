const array = []
const length = array.length-1
const mid = Math.floor(array.length - 1 / 2)
function binarySearch(arr, target){
    const sortedArr = array.sort()
    while(target === array[mid]){
        if(target === array[mid]){
            return mid
        }
        else if(target < array[mid]){
            length = length - mid
            mid = Math.floor(length / 2)
        }
    }
}