function car(brand, model, year, engineVolume){
    this.brand = brand
    this.model = model
    this.year = year
    this.engineVolume = engineVolume
    this.details = function details(){
        console.log(`car brand : ${this.brand} | car model : ${this.model} | release year : ${this.year} | engine volume : ${this.engineVolume}`)
    }
}
let mycar = new car("BMW", "320i", 2018, "2.0L")
mycar.details()