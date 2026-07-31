let displayImg = document.getElementById("langIcon")
function changeToHtml(){
    displayImg.src = "./images/html.png"
    displayImg.style.width = '350px'
}
document.getElementById('htmlBtn').addEventListener('click', changeToHtml)
function changeToCss(){
    displayImg.src = "./images/css.png"
    displayImg.style.width = '600px'
}
document.getElementById('cssBtn').addEventListener('click', changeToCss)
function changeToJs(){
    displayImg.src = "./images/js.png"
    displayImg.style.width = '800px'
}
document.getElementById('jsBtn').addEventListener('click', changeToJs)
function changeToReact(){
    displayImg.src = "./images/react.png"
    displayImg.style.width = '500px'
}
document.getElementById('reactBtn').addEventListener('click', changeToReact)


let numInput = document.getElementById('inputNum')
let textInput = document.getElementById('inputText')
let output = document.getElementById('textDisplay')
function displayAmountInput(){
    result = textInput.value.repeat(numInput.value)
    output.textContent = result
}
document.getElementById('displayBtn').addEventListener('click', displayAmountInput)

let light = document.getElementById('light')
let dark = document.getElementById('dark')

function switchModeLight(){
    light.style.backgroundColor = 'goldenRod'
    dark.style.background = "lightGray"
    document.body.style.backgroundColor = '#F5F5F5'
    document.getElementsByClassName('displayLangIcons')[0].style.backgroundColor = '#E0E0E0'
    document.getElementsByClassName('displayLangIcons')[0].style.border = 'solid 2px #B0B0B0'
    document.getElementsByClassName('displayInput')[0].style.backgroundColor = '#E0E0E0'
    document.getElementsByClassName('displayInput')[0].style.border = 'solid 2px #B0B0B0'
    let buttons1 = document.querySelectorAll('.buttons button')
    buttons1.forEach(el =>{
        el.style.backgroundColor = '#8FAADC'
        el.style.color = '#1A1A1A'
    })
    let buttons2 = document.querySelectorAll('.displayBtn button')
    buttons2.forEach(el =>{
        el.style.backgroundColor = '#8FAADC'
        el.style.color = '#1A1A1A'
    })
    let inputs = document.querySelectorAll('.inputs input')
    inputs.forEach(el =>{
        el.style.backgroundColor = '#8FAADC'
        el.style.color = '#1A1A1A'
    })
    inputs.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = 'solid 2px #B0B0B0';
            el.style.transform = 'scale(1.15)';
        });
        el.addEventListener('blur', () => {
            el.style.outline = 'none';
            el.style.transform = 'scale(1)';
        });
    });

}

function switchModeDark() {
    dark.style.backgroundColor = 'goldenrod';
    light.style.backgroundColor = 'lightGray'
    document.body.style.backgroundColor = '#0D0D0D';
    document.getElementsByClassName('displayLangIcons')[0].style.backgroundColor = '#1A1A40';
    document.getElementsByClassName('displayLangIcons')[0].style.border = 'solid 2px #2E2E2E';
    document.getElementsByClassName('displayInput')[0].style.backgroundColor = '#1A1A40';
    document.getElementsByClassName('displayInput')[0].style.border = 'solid 2px #2E2E2E';

    let buttons1 = document.querySelectorAll('.buttons button');
    buttons1.forEach(el => {
        el.style.backgroundColor = '#4B6CB7';
        el.style.color = '#E5E5E5';
    });

    let buttons2 = document.querySelectorAll('.displayBtn button');
    buttons2.forEach(el => {
        el.style.backgroundColor = '#4B6CB7';
        el.style.color = '#E5E5E5';
    });

    let inputs = document.querySelectorAll('.inputs input');
    inputs.forEach(el => {
        el.style.backgroundColor = '#4B6CB7';
        el.style.color = '#E5E5E5';
    });

    inputs.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = 'solid 2px #2E2E2E';
            el.style.transform = 'scale(1.15)';
        });
        el.addEventListener('blur', () => {
            el.style.outline = 'none';
            el.style.transform = 'scale(1)';
        });
    });
}
light.addEventListener('click', switchModeLight)
dark.addEventListener('click', switchModeDark)