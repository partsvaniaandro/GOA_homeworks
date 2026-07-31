let age = document.getElementById('ageInput')
age.addEventListener('change', () =>{
    if(age.value == ''){
        if(lightModeTurnedOn){
            document.body.style.background = '#F5F5F1'
            color.value = '#F5F5F1'
        }
        if(darkModeTurnedOn){
            document.body.style.background = '#222831'
            color.value = '#222831'
        }
    }
    else if(Number(age.value) < 18){
        document.body.style.background = 'red'
        color.value = '#FF0000'
    }
    else if(Number(age.value) >= 18){
        document.body.style.background = 'green'
        color.value = '#00FF00'
    }
})

let color = document.getElementById('colorInput')
color.value = '#222831'
color.addEventListener('change', () => {
    if(lightModeTurnedOn){
        if(color.value == '#000000'){
            document.body.style.background = '#F5F5F1'
            color.value = '#F5F5F1'
        }
        else{document.body.style.background = color.value}
    }
    if(darkModeTurnedOn){
        if(color.value == "#000000"){
            document.body.style.background = "#222831"
            color.value = '#222831'
        }
        else{document.body.style.background = color.value}
    }
})

let lightModeTurnedOn = false
let darkModeTurnedOn = true
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')
let lightBtn = document.getElementById('lightModeBtn')
let darkBtn = document.getElementById('darkModeBtn')
lightBtn.addEventListener('mouseover', () => {
    sun.style.color = '#F1D18A'
    sun.style.opacity = '100%'
    darkBtn.style.opacity = '60%'
    moon.style.opacity = '60%'
    lightBtn.style.opacity = '100%'
    lightBtn.style.background = '#F1D18A'
})
lightBtn.addEventListener('mouseout', () => {
    if(!lightModeTurnedOn){
        sun.style.color = '#A0A0A0'
        sun.style.opacity = '30%'
        moon.style.opacity = '100%'
        darkBtn.style.opacity = '100%'
        lightBtn.style.background = '#A0A0A0'
        lightBtn.style.opacity = '30%'
    }
    if(lightModeTurnedOn){
        darkBtn.style.opacity = '30%'
        moon.style.opacity = '30%'
    }
})
lightBtn.addEventListener('click', () => {
    lightModeTurnedOn = true
    darkModeTurnedOn = false
        document.body.style.background = '#F5F5F1'
        lightBtn.style.background = '#F1D18A'
        moon.style.opacity = '30%'
        darkBtn.style.opacity = '30%'
        color.value = '#F5F5F1'
        color.style.background = '#E7E3DC'
        color.style.border = '1px solid #2D2F33 '
        age.style.background = '#E7E3DC'
        age.style.border = '1px solid #2D2F33 '
        age.style.color = '#2D2F33 '
        document.getElementsByClassName('calcMainWrap')[0].style.background = '#E7E3DC'
        document.getElementsByClassName('calcMainWrap')[0].style.border = 'solid 1px #2D2F33'
        document.getElementsByClassName('output')[0].style.background = '#F5F5F1'
        document.getElementsByClassName('output')[0].style.border = 'solid 1px #2D2F33'
        document.getElementsByClassName('output')[0].style.color = '#2D2F33'
        document.getElementsByClassName('numbers')[0].style.background = '#F5F5F1'
        document.getElementsByClassName('operations')[0].style.background = '#F5F5F1'
        let buttons1 = document.querySelectorAll('.numbers button')
        let buttons2 = document.querySelectorAll('.operations button')
        buttons1.forEach(e => {
            e.style.background = '#E7E3DC'
            e.style.border = '1px solid #2D2F33'
            e.style.borderBottom = '3px solid #2D2F33'
            e.style.color = '#2D2F33'
            e.addEventListener('mousedown', ()=>{
                e.style.borderBottom = 'solid transparent 3px'
            })
            e.addEventListener('mouseup', ()=>{
                e.style.borderBottom = 'solid 3px #2D2F33'
            })
        })
        buttons2.forEach(e => {
            e.style.background = '#E7E3DC'
            e.style.border = '1px solid #2D2F33'
            e.style.borderBottom = '3px solid #2D2F33'
            e.style.color = '#2D2F33'
            e.addEventListener('mousedown', ()=>{
                e.style.borderBottom = 'solid transparent 3px'
            })
            e.addEventListener('mouseup', ()=>{
                e.style.borderBottom = 'solid 3px #2D2F33'
            })
        })
        
})





darkBtn.addEventListener('mouseover', () => {
    lightBtn.style.opacity = '60%'
    sun.style.opacity = '60%'
    darkBtn.style.background = '#90A4AE'
    moon.style.color = '#90A4AE'
    darkBtn.style.opacity = '100%'
    moon.style.opacity = '100%'
})
darkBtn.addEventListener('mouseout', () => {
    if(!darkModeTurnedOn){
        moon.style.opacity = '30%'
        moon.style.color = '#A0A0A0'
        sun.style.opacity = '100%'
        lightBtn.style.opacity = '100%'
        darkBtn.style.background = '#A0A0A0'
        darkBtn.style.opacity = '30%'
    }
    if(darkModeTurnedOn){
        sun.style.opacity = '30%'
        lightBtn.style.opacity = '30%'
    }
})
darkBtn.addEventListener('click', () => {
    lightModeTurnedOn = false
    darkModeTurnedOn = true
    sun.style.opacity = '30%'
    lightBtn.style.opacity = '30%'
    document.body.style.background = '#222831'
        darkBtn.style.background = '#90A4AE'
        color.value = '#222831'
        color.style.background = '#393E46'
        color.style.border = '1px solid #DFD0B8 '
        age.style.background = '#393E46'
        age.style.border = '1px solid #DFD0B8 '
        age.style.color = '#DFD0B8 '
        document.getElementsByClassName('calcMainWrap')[0].style.background = '#393e46'
        document.getElementsByClassName('calcMainWrap')[0].style.border = 'none'
        document.getElementsByClassName('output')[0].style.background = '#222831'
        document.getElementsByClassName('output')[0].style.border = 'none'
        document.getElementsByClassName('output')[0].style.color = '#DFD0B8'
        document.getElementsByClassName('numbers')[0].style.background = '#222831'
        document.getElementsByClassName('operations')[0].style.background = '#222831'
        let buttons1 = document.querySelectorAll('.numbers button')
        let buttons2 = document.querySelectorAll('.operations button')
        buttons1.forEach(e => {
            e.style.background = '#393e46'
            e.style.border = 'solid 1px #DFD0B8'
            e.style.borderBottom = 'solid 3px #DFD0B8'
            e.style.color = '#DFD0B8'
            e.addEventListener('mousedown', ()=>{
                e.style.borderBottom = 'solid transparent 3px'
            })
            e.addEventListener('mouseup', ()=>{
                e.style.borderBottom = 'solid 3px #DFD0B8'
            })
        })
        buttons2.forEach(e => {
            e.style.background = '#393e46'
            e.style.border = 'solid 1px #DFD0B8'
            e.style.borderBottom = 'solid 3px #DFD0B8'
            e.style.color = '#DFD0B8'
            e.addEventListener('mousedown', ()=>{
                e.style.borderBottom = 'solid transparent 3px'
            })
            e.addEventListener('mouseup', ()=>{
                e.style.borderBottom = 'solid 3px #DFD0B8'
            })
        })
})





let equals = document.getElementById('=')
let numOutput = document.getElementById('calcOutput')
let clearBtn = document.getElementById('clear')
let delBtn = document.getElementById('delete')

let buttons1 = document.querySelectorAll('.numbers button')
let buttons2 = document.querySelectorAll('.operations button')
buttons1.forEach(e => {
    e.addEventListener('click', ()=>{
        numOutput.textContent += e.value
    })
})
buttons2.forEach(e => {
    e.addEventListener('click', ()=>{
        numOutput.textContent += e.value
    })
})

equals.addEventListener('click', ()=>{
    let result = 0
    result = eval(numOutput.textContent)
    numOutput.textContent = result
})

clearBtn.addEventListener('click', ()=>{
    numOutput.textContent = ''
})
delBtn.addEventListener('click', ()=>{
    numOutput.textContent = numOutput.textContent.slice(0, -1)
})