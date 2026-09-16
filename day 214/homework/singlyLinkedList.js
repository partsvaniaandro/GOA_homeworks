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

    removeAll(values){
        if(!this.head){
            return
        }

        let current = this.head
        let prev = null

        while(current !== null){
            if(values.includes(current.data)){
                if(prev === null){
                    this.head = current.next
                }else{
                    prev.next = current.next
                }

                if(current === this.tail){
                    this.tail = prev
                }

                this.length--
                current = current.next
            }else{
                prev = current
                current = current.next
            }
        }

        if(this.head === null){
            this.tail = null
        }
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

        if(index === this.length - 1){
            this.tail = newNode
        }

        while(count < index){
            current = current.next
            count++
        }

        newNode.next = current.next
        current.next = newNode

        this.length++
    }

    get(index){
        if(!this.head){
            return
        }


        if(index < 0 || index > this.length - 1){
            return
        }

        let count = 0
        let current = this.head

        while(count !== index){
            current = current.next
            count++
        }

        return current.data
    }

    set(index, data){
        if(!this.head){
            return
        }
        
        if(index < 0 || index > this.length - 1){
            return
        }

        let count = 0
        let current = this.head

        while(count !== index){
            current = current.next
            count++
        }
        
        current.data = data
    }

    includes(data){
        if(!this.head){
            return false
        }

        let current = this.head

        while(current !== null){
            if(current.data === data){
                return true
            }
            current = current.next
        }

         return false
    }

    indexOf(data){
        if(!this.head){
            return -1
        }

        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            current = current.next
            index++
        }

        return -1
    }

    lastIndexOf(data){
        if(!this.head){
            return -1
        }

        let current = this.head
        let index = 0
        let lastIndex = -1

        while(current !== null){
            if(current.data === data){
                lastIndex = index
            }
            current = current.next
            index++
        }

        return lastIndex
    }

    find(predicate){
        if(!this.head){
            return
        }

        let current = this.head

        while(current !== null){
            if(predicate(current.data)){
                return current.data
            }
            current = current.next
        }

        return null
    }

    findIndex(predicate){
        if(!this.head){
            return -1
        }

        let current = this.head
        let index = 0

        while(current !== null){
            if(predicate(current.data)){
                return index
            }
            current = current.next
            index++
        }

        return -1
    }

    clear(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    //accessor methods

    getHead(){
        return this.head
    }
    getTail(){
        return this.tail
    }

    isEmpty(){
        if(this.length === 0){
            return true
        }else{
            return false
        }
    }

    length(){
        return this.length
    }

    equals(otherList){
        if(this.length !== otherList.length){
            return false
        }

        let current1 = this.head
        let current2 = otherList.head

        while(current1 !== null){
            if(current1.data !== current2.data){
                return false
            }
            current1 = current1.next
            current2 = current2.next
        }
        return true
    }

    copy(){
        const newList = new SinglyLinkedList()

        let current = this.head

        while(current !== null){
            newList.append(current.data)
            current = current.next
        }

        return newList
    }

    toArray(){
        const newArray = []
        
        let current = this.head

        while(current !== null){
            newArray.push(current.data)
            current = current.next
        }

        return newArray
    }

    fromArr(array){
        const newList = new SinglyLinkedList()

        for(let i = 0; i < array.length; i++){
            newList.append(array[i])
        }

        return newList
    }

    toString(){
        let newString = ''
        
        let current = this.head

        while(current !== null){
            newString += current.data
            if(current.next !== null){
                newString += ', '
            }
            current = current.next
        }

        return newString
    }

    fromString(string){
        const stringArr = string.split(', ')
        return this.fromArr(stringArr)
    }

    //mutator functions

    reverse(){
        if(!this.head){
            return
        }

        let current = this.head
        let prev = null
        let after = null

        while(current !== null){
            after = current.next
            current.next = prev
            prev = current
            current = after
        }

        this.tail = this.head
        this.head = prev
    }
}