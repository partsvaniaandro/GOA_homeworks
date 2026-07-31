let person1 = {
    name: 'andria',
    age: 16,
    height: 178
}
let person2 = {
    name: 'lika',
    age: 20,
    height: 183
}
let person3 = {
    name: 'lasha',
    age: 27,
    height: 171
}
let personArr = [person1, person2, person3]

for (let i = 0; i<personArr.length; i++){
    console.log('-------------------------------')
    for (let j in personArr[i]){
        console.log(`${j} : ${personArr[i][j]}`)
    }
}