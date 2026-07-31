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

    removeAt(index){
        if(!this.head){
            return
        }

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

    remove(data){
        if(!this.head){
            return
        }

        let current = this.head
        let prev = null

        while(current !== null && current.data !== data){
            prev = current
            current = current.next
        }

        if(current === null){
            return
        }

        if(prev === null){
            this.head = current.next
        } else{
             prev.next = current.next
        }

        if(current === this.tail){
            this.tail = prev
        }

        if(this.head === null){
            this.tail = null
        }

        this.length--
    }

    clear(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insertBefore(index, data){
        if(!this.head){
            return
        }

        if(index < 0 || index > this.length - 1){
            return
        }

        if(!Number.isInteger(index)){
            return
        }

        let newNode = new Node(data)
        let current = this.head
        let prev = null
        let count = 0

        if(index === 0){
            this.head = newNode
            this.head.next = current
            this.length++
            return
        }

        while(index !== count){
            prev = current
            current = current.next
            count++
        }


        prev.next = newNode
        newNode.next = current
        this.length++
    }

    insertAfter(index, data){
        if(!this.head){
            return
        }

        if(!Number.isInteger(index)){
            return
        }

        if(index < 0 || index > this.length - 1){
            return
        }

        let newNode = new Node(data)
        let current = this.head
        let count = 0

        while(count < index){
            current = current.next
            count++
        }

        newNode.next = current.next
        current.next = newNode

        if(index === this.length - 1){
            this.tail = newNode
        }

        this.length++
    }
}