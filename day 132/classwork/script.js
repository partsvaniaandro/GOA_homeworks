let firstName = document.getElementById('name')
let lastName = document.getElementById('lastName')
let age = document.getElementById('age')
let logBtn = document.getElementById('logBtn')
firstName.addEventListener('input', ()=>{
    localStorage.setItem('firstName', firstName.value)
})
lastName.addEventListener('input', ()=>{
    localStorage.setItem('lastName', lastName.value)
})
age.addEventListener('input', ()=>{
    localStorage.setItem('age', age.value)
})
logBtn.addEventListener('click', ()=>{
    console.log(`
    firstName:${localStorage.getItem('firstName')}
    lastName:${localStorage.getItem('lastName')}
    age:${localStorage.getItem('age')}`)
})
