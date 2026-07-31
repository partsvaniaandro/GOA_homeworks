let div = document.getElementById('div')
let input = document.getElementById('secondsInput')
div.style.backgroundColor = 'blue'
div.style.width = "100px";
div.style.height = "100px";
div.style.position = 'relative'





function moveDiv(){
    div.style.transition = `all ${input.value / 8}s ease`
    const timeStep = (Number(input.value) * 1000) / 4
    setTimeout(() => {
        div.style.left = '150px'
    }, timeStep / 2)
    setTimeout(() => {
        div.style.left = '0px'
    }, timeStep)



    setTimeout(() => {
        div.style.top = '150px'
    }, timeStep + (timeStep / 2))
    setTimeout(() => {
        div.style.top = '0px'
    }, timeStep * 2)



    setTimeout(() => {
        div.style.left = '-150px'
    }, timeStep * 2 + (timeStep / 2))

    setTimeout(() => {
        div.style.left = '0px'
    }, timeStep * 3)



    setTimeout(() => {
        div.style.top = '-150px'
    }, timeStep * 3 + (timeStep / 2))
    setTimeout(() => {
        div.style.top = '0px'
    }, timeStep * 4)
}
document.getElementById('div').addEventListener('click', moveDiv)