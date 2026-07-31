class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    append(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return
        }
        
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
    }

    prepend(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return;
        }
        
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
        this.length++
    }
}