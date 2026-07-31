let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
document.getElementById("plusbtn").addEventListener("click", function() {
    let result = parseFloat(num1.value) + parseInt(num2.value)
    console.log(result)
    document.getElementById("display").textContent = result
})
document.getElementById("minusbtn").addEventListener("click", function() {
    let result = parseFloat(num1.value) - parseInt(num2.value)
    console.log(result)
    document.getElementById("display").textContent = result
})