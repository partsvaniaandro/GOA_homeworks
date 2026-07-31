document.body.style.background = '#f5f5f5'
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
let maindiv = document.getElementById('mainDiv')
for(let i = 0 ; i<10; i++){
    maindiv.innerHTML += "<div id='IdDiv'style = 'background:#2a5298; width:150px; height:250px; margin:10px; border-radius:10px;'></div>"
}
maindiv.style.display = 'flex'
maindiv.style.justifyContent = 'center'
maindiv.style.alignItems = 'center'
maindiv.style.marginTop = '40px'




let classes = document.getElementsByClassName('classDiv')
let mainclass = document.getElementsByClassName('mainClassDiv')[0]
mainclass.style.display = 'flex'
mainclass.style.justifyContent = 'center'
mainclass.style.alignItems = 'center'
for(let i = 0; i < classes.length; i++){
    classes[i].style.width = '150px'
    classes[i].style.height = '250px'
    classes[i].style.background = '#d32f2f'
    classes[i].style.borderRadius = '10px'
    classes[i].style.margin = '10px'
}




let allDivs = document.querySelectorAll('div')
let queryDiv = document.getElementsByClassName('queryDiv')[0]
queryDiv.style.display = 'flex'
queryDiv.style.justifyContent = 'center'

for (let i = allDivs.length - 10; i < allDivs.length; i++) {
    allDivs[i].style.background = '#fdd835';
    allDivs[i].style.width = '150px';
    allDivs[i].style.height = '250px';
    allDivs[i].style.borderRadius = '10px';
    allDivs[i].style.margin = '10px'
}
