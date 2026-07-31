const name = prompt("please enter your name: ");
const nameDisplay = document.getElementById("name");
nameDisplay.textContent = name;
nameDisplay.style.textAlign = "right";




const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const input = document.getElementById("input");
const apply = document.getElementById("apply");
let number = 0;
input.value = 0
increase.onclick = function() {
    number = number + 1
    count.textContent = number
}
decrease.onclick = function() {
    number = number - 1
    count.textContent = number
}
multiply.onclick = function() {
    number = number * 2
    count.textContent = number
}
divide.onclick = function() {
    number = number / 2
    count.textContent = number
}
apply.onclick = function() {
    const value = input.value
    number = value
    count.textContent = value
}






