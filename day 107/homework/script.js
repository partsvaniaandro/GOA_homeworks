//manual map
let originalArr = [1,2,3,4,5,6,7,8,9]
let mapArr = []
for(let i = 0;i<originalArr.length;i++){
    mapArr.push(originalArr[i]*2)
}
console.log(mapArr)

//manual filter
let originalArr1 = [1,2,3,4,5,6,7,8,9]
let filterArr = []
for(let i = 0;i<originalArr1.length;i++){
    if(originalArr1[i] > 3){
        filterArr.push(originalArr1[i])
    }
}
console.log(filterArr)