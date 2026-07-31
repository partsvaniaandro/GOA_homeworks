document.getElementById('checkBtn').addEventListener('click', function(){
    document.getElementById('output').textContent = (Number(document.getElementById('numInput').value)%2 == 0)? 'true' : 'false'
})

document.getElementById('checkBtn').addEventListener('click', function(){
    document.getElementById('output1').textContent = (Number(document.getElementById('numInput').value)%2 == 0)? `${Number(document.getElementById('numInput').value)*8}` : `${Number(document.getElementById('numInput').value)*9}`
})

function checkNumber(num){
    let output = (num > 0) ? 'positive' : 'negative'
    return output
}

function randomiser(array){
    let random = Math.random(array)
    return random
}