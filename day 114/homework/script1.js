class product{
    constructor(item, price){
        this.item = item
        this.price = price
    }
    get ItemPrice(){
        return this.price
    }
    set ItemPrice(e){
        if(e<0){
            return "negative number not allowed"
        }
        this.price = e
    }
}


class rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    get area(){
        return this.width * this.height
    }
    set width(e){
        this.width = e
    }
    set height(e){
        this.height = e
    }
}



class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0] || "";
        this.lastName = parts[1] || "";
    }
}
const person = new User("ანდრია", "ფარცვანია")
person.fullName = "ნიკა კეშელავა"
console.log(person.firstName)
console.log(person.lastName)



class mathHelper{
    static add(num1, num2){
        return num1 + num2
    }
}
console.log(mathHelper.add(2, 3))