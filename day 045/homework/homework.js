//1) შევქმნათ ფუნქცია რომელსაც გადაეცემა წუთები და აბრუნებს შესაბამის წამების რაოდენობას
//არ არის void
function sec(min){
    return min * 60;
}
console.log(sec(2));

//2) შევქმნათ ფუნქცია რომელსაც გადაეცემა სამი რიცხვი და აბრუნებს პირველი ორი რიცხვის ჯამის ნამრავლს მესამე რიცხვზე
//არ არის void
function math(a, b, c){
    return (a + b) * c;
}
console.log(math(2, 2, 2));

//3) შევქმნათ ფუნქცია რომელსაც გადაეცემა ორი რიცხვი და აბრუნებს True-ს თუ პირველი რიცხვი მეტია, ხოლო მეორეზე აბრუნებს False ( if statment-ის გარეშე )
//არ არის void
function func(a, b){
    return a > b
}
console.log(func(5, 10))

//4) შევქმნათ ფუნქცია რომელსაც კონსოლში გამოაქვს ( "Elemenet: "  და გადაცემული ელემენტი )
function elem(id){
    const elem = document.getElementById(id);
    console.log("element: " + elem.textContent)
}
elem("p1")
//ამას გამოაქვს element: [object HTMLParagraphElement] კონსოლში.

//5) შევქმნათ ფუნქია რომელსაც გადეცემა, id-ელემენტის და სტრინგი, ფუნქციამ სტრინგი შესაბამის ელემენტში უნდა ჩასვას
function idString(id, str){
    const elem = document.getElementById(id)
    elem.textContent = str
}
idString("p1", "hello world!")