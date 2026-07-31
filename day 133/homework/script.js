import {weatherData} from "./city.js"
let cityInput = document.getElementById('cityInput')
let weatherOutput = document.getElementById('weatherInfo')
let title = document.getElementById('title')

function weatherDisplay(){
    weatherData.forEach(el => {
    if(cityInput.value == el.city){
        weatherOutput.innerHTML = `
        <div class = 'item'>
            <p>${el.city}</p>
            <p>${el.temperature}°C</p>
            <p>${el.humidity}%</p>
            <p>${el.windSpeed}m/s</p>
            <p>weather:${el.weatherMain}</p>
            <p>type:${el.weatherDescription}</p>
        </div>`
    }
    })
}
cityInput.addEventListener('input', weatherDisplay)
title.innerText = 'Hello, Kocho!'

let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "indigo",
  "violet",
  "gold",
  "silver",
  "beige"
]
let colorBtn = document.getElementById('colorBtn')
function btnRandomColor(){
    let randomIndex = Math.floor(Math.random() * colors.length)
    let randomColor = colors[randomIndex]
    colorBtn.style.background = randomColor
}
colorBtn.addEventListener('click', btnRandomColor)

let userInput = document.getElementById('userInput')
let userOutput = document.getElementById('userOutput')

function inputToOutput(){
    userOutput.innerText = userInput.value
}
userInput.addEventListener('input', inputToOutput)