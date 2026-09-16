class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(value){
        if(!value){
            return
        }
        const newNode = new Node(value)
        if(this.size === 0){
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }

    dequeue(){
        if(this.size <= 1){
            this.head = null
            this.tail = null
            this.size = 0
            return
        }
        this.head = this.head.next
        this.size--
    }

    peek(){
        if(this.size === 0){
            return
        }
        return this.head
    }

    isEmpty(){
        return this.size === 0
    }
}