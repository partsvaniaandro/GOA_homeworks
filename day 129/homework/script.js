//ჯსონ გამოიყენება ისე როგორც ტრანსლატორი პროგრამირების ენებს შორის, იგი იწერება ისეთ ფორმატში რომელსაც ყველა ენა კითხულობს, და ამ ფორმატში ყველა ენიდან შეიძლება შეტანა ინფორმაციის.

let fetchBtn = document.querySelector(".fetchBtn")
let outputDiv = document.querySelector(".fetchedInfo")
function fetchFunc(api){
    outputDiv.innerHTML = `
    <div class='post'>
      <div class='userInfo'>
        <div class='userId'>userId:${api.userId}</div>
        <div class='id'>id:${api.id}</div>
      </div>
      <div class='userPost'>
        <div class='title'>${api.title}</div>
        <div class='body'>${api.body}</div>
      </div>
    </div>`
}
fetchBtn.addEventListener('click', ()=>{fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(res => fetchFunc(res))})