let queue = []
let head = 0

function enqueue(value){
    if(!value){
        return
    }
    if(queue.length === 0){
        queue.push(value)
        head = 0
        return
    }
    queue.push(value)
}

function dequeue(){
    if(queue.length <= 1){
        queue = []
        return
    }
    head++
}

function peek(){
    if(queue.length === 0){
        return
    }
    return queue[head]
}

function isEmpty(){
    return queue.length === 0
}



const itemsToAdd = [10, 20, 30, 40, 50]
for(let i = 0; i < itemsToAdd.length; i++){
    enqueue(itemsToAdd[i])
}
console.log(queue)

console.log(peek())

enqueue(60)
console.log(queue[queue.length - 1])