// 1) TypeScript არის javascript-ი, რომელიც კოდის წერას უფრო უსაფრთხოს და კომფორტულს ხდის. TS ამატებს ტიპებს როგორც string, number, boolean JS-ს

// 2) JS არის დინამიკური, TS აქვს სტატიკური ტიპები.

// 3)
// number – რიცხვი
// string – ტექსტი
// boolean – true/false
// any – ყველაფერი
// void – არაფერს აბრუნებს
// array – სია
// tuple – ფიქსირებული ტიპები
// object – ობიექტი
// enum – კონსტანტები

// 4) ცვლადი: let age: number = 20;

// 5) 
let a = 10, b = 5;
console.log(a + b);

// 6)
let t: string = "hi";
//t = 10; // აგდებს error-ს: Type 'number' is not assignable to type 'string'

// 7)
function hello(n: string){ return "Hi " + n; }

// 8) ის არის void ფუნქცია
function log(m: string): void { console.log(m); }

// 9) 
function sum(a:number, b:number, c:number, d:number, e:number){ return a+b+c+d+e; }

// 11, 10)
let nums: number[] = [1,2,3];

// 12)
let names: string[] = ["Andria","Niko"]

// 13)
function print(arr:any[]){
    for(let i of arr) console.log(i); 
}

// 14)
function merge(a:any[],b:any[]){ 
    return a.concat(b); 
}

// 15)
let u: [string,number] = ["Andria",16];

// 16)
let user: [string,number,boolean] = ["Andria",16,true];