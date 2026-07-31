
const userName = prompt("enter your name: ");
const userNameDisplay = document.getElementById("userName");
userNameDisplay.textContent = userName;
userNameDisplay.style.textAlign = "right";

const userInput = document.getElementById("userInput");
const userText = document.getElementById("userText");
const enterButton = document.getElementById("enter");
userInput.value = "enter your text";

userInput.onclick = function(){
    userInput.value = "";
}

enterButton.onclick = function() {
    userText.textContent = userInput.value;
}