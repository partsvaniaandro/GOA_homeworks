function apply(){
    age = document.getElementById("input_age").value
    exp = document.getElementById("input_exp").value
    message = document.getElementById("message")
    if (age >=- 25 && exp >= 5){
        message.textContent = "you have been accepted!"
    }
    else{
        message.textContent = "you do not meet the requirements"
    }
}
document.getElementById("check").addEventListener("click", apply)