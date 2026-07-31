let num1 = prompt("enter the first number: ")
let num2 = prompt("enter the second number: ")
let operation = prompt("enter your operation choice: ")
num1 = parseFloat(num1)
num2 = parseFloat(num2)
if (!num1 || !num2 || !operation) {
    console.log("Input cannot be empty.");
}
else{
    if (operation == "+"){
        let result = num1 + num2
        console.log(result)
    }
    if (operation == "-"){
        let result = num1 - num2
        console.log(result)
    }
    else{
        console.log("operation not supported")
    }
}