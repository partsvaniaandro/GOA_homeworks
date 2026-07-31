while (true){
    let num1 = prompt("enter first number: ")
    if(num1 == "exit" || num1 == "EXIT") break
    let num2 = prompt("enter second number: ")
    if(num2 == "exit" || num2 == "EXIT") break
    let sum = num1 * num2
    alert(sum)
}