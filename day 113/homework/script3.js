class car{
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }
    get fullName(){
        return `brand: ${this.brand} | model: ${this.model} | year: ${this.year}`
    }
    set year(el){
        this.year = el
    }
    set model(el){
        this.model = el
    }
    set brand(el){
        this.brand = el
    }
}