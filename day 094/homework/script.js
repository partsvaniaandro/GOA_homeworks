let input = document.getElementById('input')
let button = document.getElementById('button')
let div = document.getElementById('div')
let warning = document.getElementById('warning')
let colorInput = document.getElementById('colorInput')
function changeBackGround(){
    warning.textContent = ''
    if(div.children.length == 0){
        warning.textContent = 'there are no elements'
        return
    }
    if(input.value == ''){
        warning.textContent = 'the input cant be empty'
        return
    }
    if(Number(input.value) > div.children.length){
        warning.textContent = `number cant be lower than ${div.children.length}`
        return
    }
    if(Number(input.value) < 1 ){
        warning.textContent = 'number cant be lower than 1'
        return
    }

    div.children[Number(input.value) - 1].style.backgroundColor = colorInput.value
}
button.addEventListener('click', changeBackGround)