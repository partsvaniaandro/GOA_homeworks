function sportsman(name, age, sport, trainingHours){
    this.name = name
    this.age = age
    this.sport = sport
    this.trainingHours = Number(trainingHours)
    this.increaseResults = function increaseResults(){
        let percentageIncrease = (this.trainingHours * 20) / 100
        let trainingHours = (percentageIncrease + this.trainingHours) * 7
        console.log(trainingHours)
    }
}
let ilia = new sportsman('ilia topuria', '26', 'MMA(Mixed Martial Arts)', 5)
ilia.increaseResults()