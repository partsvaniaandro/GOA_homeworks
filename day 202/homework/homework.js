class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;   
        this.tail = null
        this.size = 0;
    }
    
    // append O(1)
    append(data) {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++;
    }

    prepend(data){
        const newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    
    delete(index) {
        if(index === 0) {
            this.head = this.head.next
            if(this.size === 1){
                this.tail = null
            }
            this.size--
            return
        }
        const totalIndexes = this.size - 1
        if(index > totalIndexes || index < 0) return
        let count = 0
        let current = this.head
        let previous = null
        while(count != index){
            previous = current
            current = current.next
            count++
        }
        previous.next = current.next
        if(count === totalIndexes) {
            this.tail = previous
        }
        this.size--
    }

    insert(index, data) {
        let newNode = new Node(data)
        if(index === 0) {
            newNode.next = this.head
            this.head = newNode
            this.size++
            return
        }
        const totalIndexes = this.size - 1
        if(index > totalIndexes || index < 0) return
        let count = 0
        let current = this.head
        while(count != index - 1){
            current = current.next
            count++
        }
        newNode.next = current.next
        current.next = newNode
        this.size++
    }

    getByIndex(index) {
        const totalIndexes = this.size - 1
        if(index > totalIndexes || index < 0) return
        let count = 0
        let current = this.head
        while(count != index) {
            current = current.next
            count++
        }
        return current
    }
    
    getByValue(data) {
        let current = this.head
        let count = 0
        while(current){
            if(data === current.data){
                return ({ index: count, node: current })
            }
            current = current.next
            count++
        }
        return ('could not find the given data')
    }

    checkIfEmpty(){
        if(this.size > 0){
            return('the linked list is not empty')
        }else{
            return('the linked list is empty')
        }
    }

    clear(){
        this.size = 0 
        this.head = null
        this.tail = null
    }

    // printList O(n)
    print(){
        let current = this.head;
        let output = "";
        while(current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        console.log(output + "null")
    }
}



const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log(list)
list.print();