let alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]



let output = document.getElementById('output')
let numberRadio = document.getElementById('numRadio')
let characterRadio = document.getElementById('charRadio')

let charInterval, numInterval

function numRadio(){
    clearInterval(charInterval);
    clearInterval(numInterval);

    function randomNum(){
        output.textContent = numbers[Math.floor(Math.random() * numbers.length)]
    }
    numInterval = setInterval(
        randomNum, 1000
    )
}
function charRadio(){
    clearInterval(charInterval);
    clearInterval(numInterval);
    function randomchar(){
        output.textContent = alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    charInterval = setInterval(
        randomchar, 1000
    )
}

function checkRadio(){
    if (numberRadio.checked){
        numRadio()
    }
    else if(characterRadio.checked){
        charRadio()
    }
}
function stopRadio(){
    clearInterval(charInterval)
    clearInterval(numInterval)
    output.textContent = ''
}
document.getElementById('startBtn').addEventListener('click', checkRadio)
document.getElementById('endBtn').addEventListener('click', stopRadio)
