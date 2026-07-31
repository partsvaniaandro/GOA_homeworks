let phone1 = {
  brand: "Apple",
  model: "iphone 14 Pro",
  storage: "256GB",
  ram: "6GB",
};

let phone2 = {
  brand: "Samsung",
  model: "Galaxy S23",
  storage: "128GB",
  ram: "8GB",
};

class phone {
    constructor(brand, model, storage, ram){
        this.brand = brand
        this.model = model
        this.storage = storage
        this.ram = ram
    }
}

let phone3 = new phone('Xiaomi', 'Redmi Note 12', '128GB', '6GB')
console.log(phone3)