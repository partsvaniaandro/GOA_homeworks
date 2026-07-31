class temperature{
    constructor(celsius, fahrenheit){
        this._celsius = celsius
        this._fahrenheit = fahrenheit
    }
    get fahrenheit(){
        return this._fahrenheit
    }
    get celsius(){
        return this._celsius
    }
    set fahrenheit(el){
        this._fahrenheit = el
    }
    set celsius(el){
        this._celsius = el
    }
}
let p = new temperature(20, 80)
console.log(p.celsius = 70)



class Rectangle {
  constructor() {
    this._width = 0;
    this._height = 0;
  }
  set width(val) {
    this._width = Number(val);
  }
  set height(val) {
    this._height = Number(val);
  }
  get area() {
    return this._width * this._height;
  }
}


class User {
  constructor() {
    this._firstName = '';
    this._lastName = '';
  }
  set firstName(name) {
    this._firstName = name.trim();
  }
  set lastName(name) {
    this._lastName = name.trim();
  }
  get fullName() {
    return (this._firstName + ' ' + this._lastName).trim();
  }
}



class BankAccount {
  #balance = 0;
  set balance(amount) {
    if (typeof amount === 'number' && amount > 0) {
      this.#balance = amount;
    }
  }
  get balance() {
    return this.#balance;
  }
}


class Product {
  constructor() {
    this._price = 0;
    this._discount = 0;// procenti
  }
  set price(value) {
    this._price = Number(value);
  }
  set discount(value) {
    this._discount = Number(value);
  }
  get finalPrice() {
    return this._price * (1 - this._discount / 100);
  }
}
