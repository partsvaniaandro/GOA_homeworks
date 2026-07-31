const lightMode = document.getElementById("light")
const darkMode = document.getElementById("dark")
document.getElementById("body").style.transition = "all 0.3s";
darkMode.addEventListener('click', function(){
    document.getElementById("body").style.backgroundColor = "rgb(41, 41, 41)";
})
lightMode.addEventListener('click', function(){
    document.getElementById("body").style.backgroundColor = "white";
})

const displayInput = document.getElementById("displayInput")
const displayButton = document.getElementById("displayButton");
const displayText = document.getElementById("displayText");
document.getElementById("displayText").style.transition = "all 0.3s";
displayButton.addEventListener('click', function(){
    displayText.textContent = displayText.textContent + document.getElementById("displayInput").value;
})
displayInput.addEventListener('click', function(){
    displayInput.value = " ";
})

const colorInput = document.getElementById("colorInput");
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener('click', function(){
    displayText.style.color = document.getElementById("colorInput").value;
})
colorInput.addEventListener('click', function(){
    colorInput.value = " ";
})

const sizeInput = document.getElementById("sizeInput");
const sizeButton = document.getElementById("sizeButton");
sizeButton.addEventListener('click', function(){
    displayText.style.fontSize = document.getElementById("sizeInput").value + 'px';3
})
sizeInput.addEventListener('click', function(){
    sizeInput.value = " ";
})

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', function(){
    displayText.textContent = ""
})


