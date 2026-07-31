class calculator{
    constructor(a, b){
        this.num1 = a
        this.num2 = b
    }
    add(){
        return this.num1 + this.num2
    }
    substract(){
        return this.num1 - this.num2
    }
    multiply(){
        return this.num1 * this.num2
    }
    divide(){
        if(this.num2 === 0){
            return "division on 0 is impossible"
        }
        return this.num1 / this.num2
    }
}
const p = new calculator(5, 0)
console.log(p.divide())