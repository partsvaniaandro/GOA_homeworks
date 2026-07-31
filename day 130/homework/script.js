//try და catch გამოიყენება იმისთვის რომ დავიჭიროთ შეცდომები async/await ფუნქციებში ან ზოგადად კოდში, როცა promise ერორს აბრუნებს
//async ქმნის ფუნქციას რომელიც აბრუნებს promise-ს, სადაც შეგვიძლია await-ის გამოყენება რისთვისაც ფუნქციაში მოქცეული კოდი სინქრონულს დავამსგავსოთ
let mainDiv = document.querySelector('.mainDiv')
function func1Display(data){
    data.forEach(el => {
        mainDiv.innerHTML += `
    <div class='post'>
      <div class='userInfo'>
        <div class='userId'>userId:${el.userId}</div>
        <div class='id'>id:${el.id}</div>
      </div>
      <div class='userPost'>
        <div class='title'>${el.title}</div>
        <div class='body'>${el.body}</div>
      </div>
    </div>`
    });
}
async function func1(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
        func1Display(json)
    }catch(err){
        console.log(err)
    }
}
func1()