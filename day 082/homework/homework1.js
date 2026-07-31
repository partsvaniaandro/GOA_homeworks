let userText = document.getElementById('userText')
let userTime = document.getElementById('userTime')
let output = document.getElementById('output')
let button = document.getElementById('displayBtn')
let clearBtn = document.getElementById('clearBtn')
function displayText(){
    output.textContent = userText.value
}
button.addEventListener('click', function(){
    setTimeout(displayText, userTime.value * 1000)
})
clearBtn.addEventListener('click', function(){
    output.textContent = ''
})
