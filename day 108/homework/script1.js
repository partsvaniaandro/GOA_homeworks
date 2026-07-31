const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" }
];

let str = users.map(user => user.firstName + user.lastName);
console.log(str);



const students = [
  { name: "Nika", score: 85 },
  { name: "Lika", score: 92 },
  { name: "Saba", score: 88 },
  { name: "Tako", score: 95 }
];
let filtered = students.filter(x => x.score > 90)
console.log(filtered)



const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 }
];

let priceSum = cart.reduce(((sum, e) => sum + e.price),0)
console.log(priceSum)