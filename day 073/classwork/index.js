//1) შექმენით ადამიანის, ცხოველის ან მანქანის ობიექტი რომელსაც ექნება 5 property, და გამოიტანეთ მისი ერთ-ერთი property კონსოლში.
let person = {
    name : "andria",
    surname : "partsvania",
    age : 15,
    height : 178,
    location : "tbilisi"
}
console.log(person.name)



//2)შექმენით ობიექტი ორი key-value წყვილით ( 2 porpetry-თ ), პირველი key იქნება 'რიგი_0' მეორე key 'რიგი_1', პირველ value-ში შეინახეთ 5 ელემენტიანი მასივი ლუწი რიცხვების, მეორეში კენტი რიცხვების, გადაუყევით ორივე მასივს და გამოიტანეთ თითოეულის ელემენტი ერთდროულად, ( ცალ ცალკე არ გადაუყვეთ პირველს და მეორეს )
let object = {
    array1 : [1, 3, 5, 7, 9],
    array2 : [2, 4, 6, 8, 10]
};
for (let i = 0 ; i < object.array1.length ; i++){
    console.log(object.array1[i], object.array2[i])
}


//3) შექმენით ფუნქცია რომელიც არგუმენტად იღებს ობიექტს, ამ ობიექტიდან კითხულობს ორ value-ს ( quantity და element ) ( ეს key-ების სახლეებია ), შემდეგ დააბრუნებს მასივს შესაბამისად. ( ის ელემენტი რაც მოცემული იყო იმდენჯერ ჩასმული მასივში რამდენჯერაც quantity-ში იყო მოცემული )
let funcobject = {
    element:"hello",
    quantity:2
}
function objectEQ(object){
    let newarray = []
    for(let i = 0; i < object.quantity; i++){
        newarray.push(funcobject.element)
    }
    return newarray
}
console.log(objectEQ(funcobject))