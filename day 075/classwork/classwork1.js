function animal(animal, weight, color){
    this.animal = animal
    this.weight = weight
    this.color = color
    this.describe = function(){
        console.log(`the animal is a ${this.animal}, the ${this.animal}s weight is: ${weight}kg, the color of the ${this.animal} is: ${this.color}`)
    }
}
myAnimal = new animal("cat", 4, "black")
myAnimal.describe()