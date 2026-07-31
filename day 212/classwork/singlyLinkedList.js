class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return
        }

        this.tail.next = newNode(data)
        this.tail = newNode
        this.length++
    }

    prepend(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.length++
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    delete(index){
        if(index < 0 || index > this.length - 1){
            return
        }

        if(index === 0){
            if(this.length === 1){
                this.head = null
                this.tail = null
                this.length--
                return
            }
            this.head = this.head.next
            this.length--
            return
        }

        let count = 0
        let current = this.head
        let prev = null

        while(count !== index){
            prev = current
            current = current.next
            count++
        }
        prev.next = current.next

        if(current === this.tail){
            this.tail = prev
        }

        this.length--
    }
}