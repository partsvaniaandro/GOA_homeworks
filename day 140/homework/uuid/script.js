import {v4 as uuid} from 'uuid'
const idArray = []
for(let i = 0; i<5; i++){
    idArray.push(uuid())
}
console.log(idArray)