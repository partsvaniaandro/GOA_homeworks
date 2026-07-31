document.getElementById('hello').textContent = 'Hello'
document.getElementById('world').textContent = 'World'
let helloWorld = document.getElementsByClassName('hello_world')[0]
helloWorld.style.display = 'flex'
helloWorld.style.marginTop = '200px'
let paragraphs = document.getElementsByTagName('p')
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = 'gray'
}
document.body.style.background = '#2c3e50'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'