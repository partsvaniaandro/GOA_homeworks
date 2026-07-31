function confirmDark(){
    let confirmDarkMode = confirm("do you want to enable dark mode?")
    if (confirmDarkMode){
        document.body.style.backgroundColor = '#2c2c2c'
        document.body.style.color = 'white'
        document.getElementsByClassName('information')[0].style.backgroundColor = '#1e1e1e'
        document.getElementsByClassName('radioBtns')[0].style.backgroundColor = '#1e1e1e'
    }
}

let infos = {
    Andria:{info:'A passionate frontend developer who loves crafting beautiful user interfaces with HTML, CSS, and JavaScript. Always exploring new design trends.', pfp:'images/Andria.png'},
    Giorgi:{info:'A backend engineer specializing in Python and Node.js. Enjoys optimizing databases and building scalable web applications.', pfp:'images/Giorgi.png'},
    Alexandre:{info:'A full-stack developer with expertise in React and Django. Loves solving complex problems and automating workflows.', pfp:'images/Alexandre.png'}
}
function updateInfo(person){
    document.getElementById('profilePic').style.display = 'block'
    document.getElementById('profilePic').src = infos[person].pfp
    document.getElementById('name').textContent = person
    document.getElementById('info').textContent = infos[person].info
}
document.getElementById('Andria').addEventListener('click', function(){
    updateInfo('Andria')
})
document.getElementById('Giorgi').addEventListener('click', function(){
    updateInfo('Giorgi')
})
document.getElementById('Alexandre').addEventListener('click', function(){
    updateInfo('Alexandre')
})
confirmDark()