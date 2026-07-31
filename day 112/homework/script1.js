class person{
    constructor(name, age){
        this._name = name
        this._age = age
    }
    introduce(){
        return `i am ${this._name}, i am ${this._age} years old`
    }
}
const p = new person('andria', 16);
console.log(p.introduce());