let numInput = document.getElementById('numInput')
let numInput1 = document.getElementById('numInput1')
let numInput2 = document.getElementById('numInput2')

let addBtn = document.getElementById('addBtn')
let addBtn1 = document.getElementById('addBtn1')
let addBtn2 = document.getElementById('addBtn2')

let list = document.getElementById('list')
let list1 = document.getElementById('list1')
let list2 = document.getElementById('list2')

let warning = document.getElementById('warning')
let warning1 = document.getElementById('warning1')
let warning2 = document.getElementById('warning2')

let clearBtn = document.getElementById('clear')
let clearBtn1 = document.getElementById('clear1')
let clearBtn2 = document.getElementById('clear2')

function higherOrLower(){
    if (numInput.value.length > 3){
        warning.textContent = 'input must not be longer than 3 characters'
        return
    }
    else if (numInput.value == ''){
        warning.textContent = "input cant be empty"
        return
    }
    let p = document.createElement("p")
    p.textContent = numInput.value
    if (Number(numInput.value) > 20){
        list.appendChild(p)
        warning.textContent = ''
    }
    else if (Number(numInput.value) <= 20){
        list.prepend(p)
        warning.textContent = ''
    }
    numInput.value = ''
}
addBtn.addEventListener('click', higherOrLower)

function clearList(){
    list.innerHTML = ''
}
clearBtn.addEventListener('click', clearList)



function endsWith(){
    let color = document.createElement('div')
    let lastChar = numInput1.value.slice(-1);
    color.style.width = '600px'
    color.style.height = '50px'
    if (numInput1.value == ''){
        warning1.textContent = "input cant be empty"
        return
    }
    if (lastChar == '1'){
        color.style.background = 'red'
        list1.appendChild(color)
    }
    else if (lastChar == '2'){
        color.style.background = 'green'
        list1.appendChild(color)
    }
    else if (lastChar == '3'){
        color.style.background = 'blue'
        list1.appendChild(color)
    }
    numInput1.value = ''
    warning1.textContent = ''
}
addBtn1.addEventListener('click', endsWith)
function clearList1(){
    list1.innerHTML = ''
}
clearBtn1.addEventListener('click', clearList1)


function evenOrOdd(){   
    if (numInput2.value == ''){
        warning2.textContent = "input cant be empty"
        return
    }
    let div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    if (Number(numInput2.value)%2 == 0){
        div.style.borderRadius = '50%'
        div.style.background = 'blue'
        div.style.marginTop = '5px'
        div.style.marginBottom = '5px'
        list2.appendChild(div)
    }
    else if (Number(numInput2.value)%2 != 0){
        div.style.background = 'red'
        div.style.marginTop = '5px'
        div.style.marginBottom = '5px'
        list2.prepend(div)
    }
    warning2.textContent = ''
}
addBtn2.addEventListener('click', evenOrOdd)
function clearList2(){
    list2.innerHTML = ''
}
clearBtn2.addEventListener('click', clearList2)