//1) შექმენით ფუქცია რომელიც გამოიტანს ("გამარჯობა")-ს (ვოიდ ფუნქცია)
function hello(){
    console.log("გამარჯობა");
    }
    hello();

//2) შექმენით ფუნქცია რომელსაც გადაეცემა სახელის არგუმენტი და გამოიტანს ამ სახელის მისალმებას (მაგ: "გამარჯობა, ლაშა")
function hiName(name){
    console.log("გამარჯობა" + " " + name)
}
hiName("ანდრია")

//3) შექმენით ფუნქცია რომელიც აბრუნებს გადაცემულ რიცხვზე ერთით მეტს (მაგ: 55->56)  (ჩვეულებრივი ფუნქცია)
function plusOne(num){
    return num + 1
}
plusOne(5)

//4) შექმენით ფუნქცია რომელიც აბრუნებს არა-ნეგატიური რიცხვის ნეგატიურ ვერსიას და შემდეგ გამოიყენეთ ეს ფუნქცია 
//რომ გამოიტანოთ დაბრუნებულზე ერთით მეტი რიცხვი (მაგ: თუ ფუნქციას გადავეცით 44 საბოლლოდ უნდა გამოვიტანოთ (კონსოლში) -43 ) (ჩვეულებრივი ფუნქცია)

function negative(num){
    return num * -1

}
console.log(negative(5) + 1)

//5) გავაკეთოთ ფუნქცია რომელიც გადაცემული ID-ს მიხედვით აბრუნებს html-ის ელემენტს (მაგ: "first" -> document.getElementbyId("first")) 
//შემდეგ კი გამოიყენეთ ეს ფუნქცია რომ დაბრუნბულ ელემენტს 3 ატრიბუტი შევუცვალოთ (მაგ: color, backgroundColor, textContent) (ჩვეულებრიივი ფუნქცია)
function change(id){
    const element = document.getElementById(id)
    element.style.backgroundColor = "yellow";
    element.textContent = "hello world!";
    element.style.color = "red"
}
change("p1")

