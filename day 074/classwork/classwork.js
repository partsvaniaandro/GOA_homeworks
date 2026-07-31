function person(name, age, height, id){
    this.name = name
    this.age = age
    this.height = height
    this.id = id
}
let person1 = new person("andria", 16, 178, 9536)
let person2 = new person("lasha", 27, 172, 5647)
let person3 = new person("lazare", 13, 170, 6785)

function car(name, year, engine, horsepower, color, owner){
    this.name = name
    this.year = year
    this.engine = engine
    this.horsepower = horsepower
    this.color = color
    this.owner = owner
}
let car1 = new car("toyota corrola", 2020, '1.8L', '139HP', 'white', person1)
let car2 = new car("BMW 3 series", 2018, '2.0L', '255HP', 'black', person2)
let car3 = new car('tesla model 3', 2022, 'electrical', '283HP', 'red', person3)
console.log(car1, car2, car3)