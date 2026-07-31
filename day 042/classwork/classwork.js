const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
let number = 0;

decrease.addEventListener('click', function() {
    number = number - 1
    count.textContent = number
})
increase.addEventListener('click', function() {
    number = number + 1
    count.textContent = number
})