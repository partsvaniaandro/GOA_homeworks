function car(name, year, engine, horsepower, color){
    this.name = name
    this.year = year
    this.engine = engine
    this.horsepower = horsepower
    this.color = color
}
let car1 = new car("toyota corrola", 2020, '1.8L', '139HP', 'white')
let car2 = new car("BMW 3 series", 2018, '2.0L', '255HP', 'black')
let car3 = new car('tesla model 3', 2022, 'electrical', '283HP', 'red')
console.log(car1, car2, car3)

function animal(animal, species, age, weight, habitat){
    this.animal = animal
    this.species = species
    this.age = age
    this.weight = weight
    this.habitat = habitat
}
let animal1 = new animal('lion', 'panthera leo', 8, '190kg', 'savannah')
let animal2 = new animal('elephant', 'loxodonta africana', 25, '6000kg', 'forest')
let animal3 = new animal('parrot', 'psittaciformes', 3, '1kg', 'tropical forest')

function student(name, age, studentID, major, GPA){
    this.name = name
    this.age = age
    this.studentID = studentID
    this.major = major
    this.GPA = GPA
}
let student1 = new student('maxwell turner', 21, 'S20201', 'physics', 3.8)
let student2 = new student('sophia lee', 23, 'S34765', 'history', 3.5)
let student3 = new student('liam carter', 20, 'S97520', 'chemistry', 3.9)