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

    delete(index){

        if(index < 0 || index > this.length - 1){
            return
        }

        if(index === 0){
            if(this.length === 1){
                this.head = null
                this.tail = null
            }else{
                this.head.next.prev = null
                this.head = this.head.next
            }
            this.length--
            return
        }

        if(index === this.length - 1){
            this.tail.prev.next = null
            this.tail = this.tail.prev
            this.length--
            return
        }

        let count = 0
        let current = this.head

        while(count !== index){
            current = current.next
            count++

        }
        current.prev.next = current.next
        current.next.prev = current.prev

        this.length--
    }
}