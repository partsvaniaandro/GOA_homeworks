function userId(api){
    let id = api.userId
    console.log(id)
}
fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => response.json()).then(res => userId(res))




function names(api){
    let main = document.querySelector('.profilesDiv')
    api.forEach(element => {
        main.innerHTML += `
        <div class = 'profiles'>
          <h2 class = 'names'>${element.name}</h2>
          <h4 class ='emails'>${element.email}</h4>
          <h4 class ='id'>Id:${element.id}</h4>
        </div>`
        console.log(`Id: ${element.id} | name:${element.name} | email:${element.email}`)
    });
}
fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(res => names(res))


let dogBtn = document.querySelector('#dogBtn')
let dogImg = document.querySelector('#dogImg')
function randomDogImage(api){
    dogImg.src = api.message
}
dogBtn.addEventListener('click', ()=>{fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(res => randomDogImage(res))})
// fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(res => randomDogImage(res))
