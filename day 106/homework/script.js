//* 1)მოცემულია სახელების მასივი. გამოიყენე forEach, რათა მხოლოდ ის სახელები დაბეჭდო, რომელთა სიგრძეც 5-ზე მეტია.

let nameArr = ['andria', 'lasha', 'aleqsandre', 'giorgi', 'tornike']
nameArr.forEach((e)=>{
    if(e.length > 5){
        console.log(e)
    }
})


//* 2)მოცემულია რიცხვების მასივი. გამოიყენე forEach, რომ შეადგინო ახალი მასივი მხოლოდ ლუწი რიცხვებით.

let numArr = [1,2,3,4,5,6,7,8,9]
let newArr = []
numArr.forEach((e)=>{
    if(e % 2 == 0){
        newArr.push(e)
    }
})
console.log(newArr)



//* 3)მოცემულია ობიექტი, სადაც გასაღებებია პროდუქტების სახელები და მნიშვნელობები - მათი ფასები. დაბეჭდე მხოლოდ ის პროდუქტები, რომელთა ფასი 10-ზე მეტია. გამოიყენე for...in.

let priceObj = {
    'phone':500,
    'apple':1,
    'laptop':700
}
for(let i in priceObj){
    if(priceObj[i]>10){
        console.log(i)
    }
}




//* 4)მოცემულია ობიექტი სტუდენტის ქულებით. დაითვალე რამდენი საგანი აქვს სტუდენტს ჩაჭრილი (ქულა < 51). გამოიყენე for...in.

const student = {
    Mathematics: 48,
    English: 92,
    History: 42,   
    biology: 87
};
console.log('failed subjects:')
let count = 0
for(let i in student){
    if(student[i]<51){
        count+=1
        console.log(`${count}) ${i}`)
    }
}
if(count == 0){
        console.log('no failed subjects')
    }