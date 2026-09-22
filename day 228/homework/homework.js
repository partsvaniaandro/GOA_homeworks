const array = Array.from({ length: 100000 }, (_, i) => i + 1);
sortedArr = array.sort((a, b) => a - b)
function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1
    
    while(left <= right){
        const mid = Math.floor(left + (right - left) / 2)

        if(arr[mid] === target){
            return target
        }

        if(arr[mid] > target){
            right = mid - 1
        }

        else{
            left = mid + 1
        }
    }

    return -1
}

console.log(binarySearch(sortedArr, 745))