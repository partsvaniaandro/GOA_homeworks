function information(api){
    let main = document.querySelector('main')
    api.forEach(el => {
        main.innerHTML += `
        <div class='profiles'>
          <h2 class='profileIds'>${el.id}</h2>
          <h4 class='titles'>${el.title}</h4>
          <h4 class='bodies'>${el.body}</h4>
        </div>`
    });
}
fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(res => information(res))