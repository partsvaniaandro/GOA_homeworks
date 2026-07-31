const body = document.getElementById("body")
const theme = document.querySelectorAll(".themes")
const output = document.querySelectorAll(".output_box")
const calculator = document.querySelectorAll(".calculator")
const calcBtn = document.querySelectorAll(".calc_btn")
//------------------------------------------------------
const outputText = document.getElementById("output")
const del = document.getElementById("del")
const reset = document.getElementById("reset")
const equal = document.getElementById("equal")
//=========================================================
function firstTheme(){
    document.getElementById("theme_btn1").style.backgroundColor = "rgb(249, 108, 91)"
    document.getElementById("theme_btn2").style.backgroundColor = "transparent"
    document.getElementById("theme_btn3").style.backgroundColor = "transparent"
    body.style.backgroundColor = "rgb(59, 70, 100)";
    body.style.color = "white"
    outputText.style.color = "white"
    theme.forEach(el => {
        el.style.backgroundColor = "rgb(37, 45, 69)"
    })
    output.forEach(el => {
        el.style.backgroundColor = "rgb(24, 31, 50)"
    })
    calculator.forEach(el => {
        el.style.backgroundColor = "rgb(37, 45, 68)"
    })
    calcBtn.forEach(el => {
        el.style.backgroundColor = "rgb(234, 227, 219)"
        el.style.borderBottom = "solid 4px rgb(178, 162, 150)"
        el.style.color = "rgb(59, 70, 100)"
    });

    //------------------------------------------
    del.style.backgroundColor = "rgb(162, 179, 226)"
    del.addEventListener("mouseenter", function(){
        del.style.backgroundColor = "rgb(183, 198, 255)"
    })
    del.addEventListener("mouseleave", function(){
        del.style.backgroundColor = "rgb(162, 179, 226)"
    })
    del.style.borderBottom = "solid 4px rgb(66, 78, 110)"
    //------------------------------------------
    reset.style.backgroundColor = "rgb(162, 179, 226)"
    reset.addEventListener("mouseenter", function(){
        reset.style.backgroundColor = "rgb(183, 198, 255)"
    })
    reset.addEventListener("mouseleave", function(){
        reset.style.backgroundColor = "rgb(162, 179, 226)"
    })
    reset.style.borderBottom = "solid 4px rgb(66, 78, 110)"
    //---------------------------------------------
    equal.style.backgroundColor = "rgb(249, 108, 91)"
    equal.addEventListener("mouseenter", function(){
        equal.style.backgroundColor = "rgb(255, 121, 93)"
    })
    equal.addEventListener("mouseleave", function(){
        equal.style.backgroundColor = "rgb(249, 108, 91)"
    })
    equal.style.borderBottom = "solid 4px rgb(144, 35, 22)"
    //hover equal1:rgb(255, 121, 93)
}
//================================================================
function secondTheme(){
    document.getElementById("theme_btn1").style.backgroundColor = "transparent"
    document.getElementById("theme_btn2").style.backgroundColor = "rgb(249, 108, 91)"
    document.getElementById("theme_btn3").style.backgroundColor = "transparent"
    body.style.backgroundColor = "rgb(230, 230, 230)"
    body.style.color = "black"
    outputText.style.color = "rgb(57, 57, 46)"
    theme.forEach(el => {
        el.style.backgroundColor = "rgb(210, 205, 205)"
    })
    output.forEach(el => {
        el.style.backgroundColor = "rgb(238, 238, 238)"
    })
    calculator.forEach(el => {
        el.style.backgroundColor = "rgb(211, 205, 205)"
    })
    calcBtn.forEach(el => {
        el.style.backgroundColor = "rgb(229, 228, 224)"
        el.style.borderBottom = "solid 4px rgb(166, 157, 143)"
        el.style.color = "rgb(59, 70, 100)"

        el.addEventListener("mouseenter", function() {
            el.style.backgroundColor = "rgb(255, 255, 255)"
        })
        el.addEventListener("mouseleave", function(){
            el.style.backgroundColor = "rgb(229, 228, 224)"
        })
    })

    //-------------------------------------------

    del.style.backgroundColor = "rgb(98, 181, 189)"
    del.addEventListener("mouseenter", function(){
        del.style.backgroundColor = "rgb(117, 217, 227)"
    })
    del.addEventListener("mouseleave", function(){
        del.style.backgroundColor = "rgb(98, 181, 189)"
    })
    del.style.borderBottom = "solid 4px rgb(26, 95, 100)"

    //-----------------------------------------

    reset.style.backgroundColor = "rgb(98, 181, 189)"
    reset.addEventListener("mouseenter", function(){
        reset.style.backgroundColor = "rgb(117, 217, 227)"
    })
    reset.addEventListener("mouseleave", function(){
        reset.style.backgroundColor = "rgb(98, 181, 189)"
    })
    reset.style.borderBottom = "solid 4px rgb(26, 95, 100)"

    //----------------------------------------------- 

    equal.style.backgroundColor = "rgb(255, 138, 56)"
    equal.addEventListener("mouseenter", function(){
        equal.style.backgroundColor = "rgb(255, 164, 56)"
    })
    equal.addEventListener("mouseleave", function(){
        equal.style.backgroundColor = "rgb(255, 138, 56)"
    })
    equal.style.borderBottom = "solid 4px rgb(133, 55, 0)"
}
//=====================================================
function thirdTheme(){
    document.getElementById("theme_btn1").style.backgroundColor = "transparent"
    document.getElementById("theme_btn2").style.backgroundColor = "transparent"
    document.getElementById("theme_btn3").style.backgroundColor = "rgb(145, 250, 245)"
    body.style.backgroundColor = "rgb(23, 6, 42)"
    body.style.color = "rgb(255, 220, 80)"
    outputText.style.color = "rgb(255, 220, 80)"
    theme.forEach(el => {
        el.style.backgroundColor = "rgb(50, 15, 90)"
    })
    output.forEach(el => {
        el.style.backgroundColor = "rgb(30, 8, 54)"
    })
    calculator.forEach(el => {
        el.style.backgroundColor = "rgb(30, 8, 54)"
    })
    calcBtn.forEach(el => {
        el.style.backgroundColor = "rgb(51, 27, 77)"
        el.style.borderBottom = "solid 4px rgb(134, 32, 157)"
        el.style.color = "rgb(255, 220, 80)"
        el.addEventListener("mouseenter", function(){
            el.style.backgroundColor = "rgb(124, 44, 163)"
        })
        el.addEventListener("mouseleave", function(){
            el.style.backgroundColor = "rgb(51, 27, 77)"
        })
    })
    //----------------------------------------------------------
    del.style.backgroundColor = "rgb(95, 34, 125)"
    del.style.borderBottom = "solid 4px rgb(134, 32, 157)"
    del.style.color = "rgb(148, 255, 249)"
    del.addEventListener("mouseenter", function(){
        del.style.backgroundColor = "rgb(124, 44, 163)"
    })
    del.addEventListener("mouseleave", function(){
        del.style.backgroundColor = "rgb(95, 34, 125)"
    })
    //-----------------------------------------------------------
    reset.style.backgroundColor = "rgb(95, 34, 125)"
    reset.style.borderBottom = "solid 4px rgb(134, 32, 157)"
    reset.style.color = "rgb(148, 255, 249)"
    reset.addEventListener("mouseenter", function(){
        reset.style.backgroundColor = "rgb(124, 44, 163)"
    })
    reset.addEventListener("mouseleave", function(){
        reset.style.backgroundColor = "rgb(95, 34, 125)"
    })
    //----------------------------------------------------
    equal.style.backgroundColor = "rgb(118, 204, 199)"
    equal.style.borderBottom = "rgb(102, 233, 226)"
    equal.style.color = "rgb(30, 8, 54)"
    equal.addEventListener("mouseenter", function(){
        equal.style.backgroundColor = "rgb(148, 255, 249)"
    })
    equal.addEventListener("mouseleave", function(){
        equal.style.backgroundColor = "rgb(118, 204, 199)"
    })
}
document.getElementById("theme_btn1").addEventListener("click", firstTheme)
document.getElementById("theme_btn2").addEventListener("click", secondTheme)
document.getElementById("theme_btn3").addEventListener("click", thirdTheme)
//!=============================================================================
let userInput = ""
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let num5 = document.getElementById("num5")
let num6 = document.getElementById("num6")
let num7 = document.getElementById("num7")
let num8 = document.getElementById("num8")
let num9 = document.getElementById("num9")
let num0 = document.getElementById("num0")
let delBtn = document.getElementById("del")
let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let multBtn = document.getElementById("mult")
let divBtn = document.getElementById("divide")
let equalBtn = document.getElementById("equal")
let dotBtn = document.getElementById("dot")
let btnsForHandleClick = [
    "num1", "num2", "num3",
     "num4", "num5", "num6", 
     "num7", "num8", "num9", 
     "num0", "dot", "plus", 
     "minus", "mult", "divide", ]

function handleClick(value){
    const operators = ["+", "-", "*", "/", "."];
    if(operators.includes(value) && operators.includes(userInput[userInput.length-1])){
        return;
    }
    userInput = userInput + value
    outputText.textContent = userInput
}
function calculate(){
    try{
        let result = eval(userInput)
        outputText.textContent = result
        userInput = result.toString();
    } catch(error){
        outputText.textContent = ""
        userInput = ""
    }
}
function clearInput(){
    userInput = ""
    outputText.textContent = ""
}
function delCalc(){
    outputText.textContent = outputText.textContent.slice(0, -1)
    userInput = outputText.textContent
}
btnsForHandleClick.forEach(id => {
    let element = document.getElementById(id)
    if(element){
        element.addEventListener("click", function(){
            handleClick(element.textContent)
        })
    }
})
reset.addEventListener("click", clearInput)
equal.addEventListener("click", calculate)
del.addEventListener("click", delCalc)

