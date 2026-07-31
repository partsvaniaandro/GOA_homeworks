const users = [
{name: "Giga", age: 20, score: 50},
{name: "Nino", age: 25, score: 80},
{name: "giorgi", age: 23, score: 70},
{name: "lasha", age: 20, score: 60},
{name: "Tiko", age: 22, score: 90}
];

function TopScorers(users, minScore){
    return users
      .filter(user => user.score > minScore)
      .sort((a, b) => b.score - a.score)
      .map(user => user.name)
}
console.log(TopScorers(users, 65))




const mixedObj = {
  a: false,
  b: 0,
  c: "",
  d: null,
  e: undefined,
  f: NaN,
  g: 42, 
  h: "hello", 
  i: true,    
  k: [1, 2, 3]  
};

function removeFalsy(obj){
    for(let key in obj){
        if(Number.isNaN(obj[key]) || !obj[key]){
            delete obj[key]
        }
    }
    return obj
}
console.log(removeFalsy(mixedObj))