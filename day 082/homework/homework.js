let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let userInput = document.getElementById('timeInput')
let output = document.getElementById('output')
let output1 = document.getElementById('output1')
let numSec
let timeout
function checkLength(){
  if (userInput.value > 10000){
    console.log('number too big')
    stopTime()
    stop()
    output1.textContent = 'number is too big'
    return false;
  }
  return true;
}

function numEverySec(){
    let index = 0
    numSec = setInterval(function(){
        output.textContent = numbers[index]
        index++
        
        if(index >= numbers.length){
            clearInterval(numSec)
        }
    }, 1000)
    output1.textContent = ''
    output.textContent = ''
}

function stopTime(){
    timeout = setTimeout(function(){
        clearInterval(numSec)
        output1.textContent = 'times up!'
    }, userInput.value)
}

function stop(){
    clearInterval(numSec)
    clearTimeout(timeout)
    output1.textContent = ''
    output.textContent = ''
}


document.getElementById('startBtn').addEventListener('click', numEverySec)
document.getElementById('startBtn').addEventListener('click', stopTime)
document.getElementById('startBtn').addEventListener('click', checkLength)

document.getElementById('endBtn').addEventListener('click', stop)