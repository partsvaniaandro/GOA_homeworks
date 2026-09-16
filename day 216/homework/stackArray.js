class Stack{
    constructor () {
        this.length = 0
        this.items = []
    }

    isEmpty() {
        return this.length === 0
    }

    push(item) {
        this.items.push(item)
        this.length++
    }

    pop() {
        if(this.isEmpty()){
            return 'Stack is empty'
        }
        this.length--
        return this.items.pop()
    }

    size() {
        return this.length
    }

    peek() {
        return this.items[this.length - 1]
    }
}