// let name00: string = '5' ---> error  //string გვაქვს მითითებული მაგრამ ვინახავთ integer-ს
// let name00: string = 'Andria' ---> სწორია //string გვაქვს მითითებული და ვინახავთ string-ს
//* string
//* number
//* boolean
//* undefined
//* null
//!----typeScript----
//* any
//* void

let name01: string = 'Andria'
let age: number = 16
let isOnline: boolean = false

//?-------------------------------------

//! js function
// function myFunc(a){
//     return a + b
// }

//! typeScript function
// function myFunc(a:number, b:number):number{
//     return a + b
// }

//?-------------------------------------

//! typeScript void function
// function myFunc(a:number, b:number): void{
//     console.log(a + b)
       //*არ აბრუნებს არაფერს. ანუ, void ფუნქცია
// }
// any = ნებისმიერი ტიპის მონაცემთა ტიპი - ცვლადი

//?-------------------------------------

//! js array
// let arr = [1, 2, 3]

//! ts array
//let arr: number[] = [1, 2, 3]
        //*ვუთითებთ აქ რისგან შედგება სია

//?-------------------------------------

//! ts tuple
let arr: [number, string, boolean] = [16, 'Andria', true]




///?-----------------classworks--------------------
let userName: string = 'Andria' 
function greet(name: string): string{
    return(`Welcome! ${name}`)
}
console.log(greet(userName))

//---

function calculate(a: number, b: number): any{
    let addition = a + b
    let substriciton = a - b
    let multiplication = a * b
    return (`addition: ${addition}
        substriction: ${substriciton}
        mulitplication: ${multiplication}`)
}
console.log(calculate(3, 2))

//---

function multiply(a: number, b: number = 0): number{
    return a * b
}
console.log(multiply(2)) // = 0

//---

let nameArr: string[] = ['andria', 'saba', 'lazare']
console.log(nameArr)

//---

let numberArr: number[] = [1, 2, 3, 4, 5]
console.log(numberArr)