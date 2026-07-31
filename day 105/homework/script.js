let child = document.querySelector('.child')
let parent = document.querySelector('.parent')
let grandparent = document.querySelector('.grandparent')
let colorInput = document.querySelector('.colorInput input')
child.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log(e.target.id)
})
parent.addEventListener('click', (e)=>{
    console.log(e.target.id)
}, true)

grandparent.addEventListener('click', (e)=>{
    console.log(e.target.id)
})

colorInput.addEventListener('change', ()=>{
    document.body.style.background = colorInput.value
})
let submit = document.getElementById('form')
submit.addEventListener('submit', (e)=>{
    e.preventDefault()
})