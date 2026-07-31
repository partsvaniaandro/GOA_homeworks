let input = document.getElementById('numInput')
let button = document.getElementById('submitBtn')
let output = document.getElementById('output')
function checkAge(){
    let adultOrNot = (Number(input.value) >= 18) ? 'adult' : 'underage';
    output.textContent = adultOrNot
}

button.addEventListener('click', checkAge)