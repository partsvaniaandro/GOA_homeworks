class animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
class dog extends animal{
    bark(){
        return `woof, მე ვარ ${this.name}`
    }
}


class vehicle{
    constructor(model, year){
       this.model = model
       this.year = year
    }
}
class car extends vehicle{
    constructor(brand, model, year){
        super(model, year)
        this.brand = brand
    }
    carInfo(){
        return `ეს არის ${this.brand} ${this.model} ${this.year}`
    }
}



class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }
  getFullInfo() {
    return `${this.getFullName()} - კლასი: ${this.grade}`;
  }
}