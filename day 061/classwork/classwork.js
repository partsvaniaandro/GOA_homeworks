let display = document.getElementById("numDisplay")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let res = document.getElementById("restart")
function color(){
    currentValue = parseInt(display.textContent) || 0
    if(currentValue > 0){
        display.style.color = "green"
    }
    else if(currentValue < 0){
        display.style.color = "red"
    }
    else{
        display.style.color = "black"
    }
}
function add(){
    let currentValue = parseInt(display.textContent) || 0;
    display.textContent = currentValue + 1
    color()
}
function sub(){
    let currentValue = parseInt(display.textContent) || 0;
    display.textContent = currentValue - 1
    color()
}
function restarto(){
    display.textContent = 0
    color()
}
plus.addEventListener("click", add)
minus.addEventListener("click", sub)
restart.addEventListener("click", restarto)