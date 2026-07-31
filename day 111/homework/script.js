//1)მასივის დესტრუქტურიზაცია
//მოცემულია მასივი, რომელიც შეიცავს რამდენიმე ფერს (მაგ. "red", "green", "blue"...).
//შენ უნდა გამოიყენო დესტრუქტურიზაცია, რათა:
//პირველი ელემენტი შეინახო ცვლადში firstColor,
//მეორე ელემენტი — ცვლადში secondColor,
//ხოლო დარჩენილი ყველა ელემენტი — ცვლადში otherColors როგორც მასივი.
let colorArr = ['red', 'green', 'blue', 'white', 'black'];
let [firstColor, secondColor, ...restColors] = colorArr
console.log(firstColor, secondColor)


//2)ობიექტის დესტრუქტურიზაცია
//მოცემულია ობიექტი, რომელიც შეიცავს მომხმარებლის შესახებ ინფორმაციას 
//(მაგ. name, age, country).
//შენ უნდა დესტრუქტურიზაციით გამოყო ორი ველი — name და country, 
//და შეინახო ცალკე ცვლადებში ისე, რომ ამ ობიექტიდან არ გამოიყენო user.name ან user.country.
let person = {
    name:'andria',
    age:16,
    country:'georgia'
}
let {name, country} = person
console.log(name, country)


//3)დესტრუქტურიზაცია ცვლადების სახელის შეცვლით
//მოცემულია წიგნის ობიექტი, სადაც ველები არის title და author.
//შენ უნდა დესტრუქტურიზაციით გამოიტანო ეს ველები, მაგრამ შეინახო
//სხვა სახელის ცვლადებში — მაგალითად, bookTitle და bookAuthor.
let book = {
    title:'მოწყინებით დამძიმებულ სულს',
    author:'არქიმანდრიტი ლაზარე'
}
let {title:bookTitle, author:bookAuthor} = book
console.log(bookTitle, bookAuthor)


//4)ნესტირებული ობიექტის დესტრუქტურიზაცია
//მოცემულია ობიექტი, რომლის ერთ-ერთი ველი თვითონაც
//ობიექტია (მაგ. address ობიექტი city და zip ველებით).
//შენ უნდა დესტრუქტურიზაციით გამოიტანო city ველი ისე, 
//რომ გზად არ მოგიწიოს person.address.city დაწერა.
let user = {
    name:'bob',
    adress:{
        city:'kutaisi',
        zip:1010
    }
}
let {adress} = user
let {city} = adress
console.log(city)