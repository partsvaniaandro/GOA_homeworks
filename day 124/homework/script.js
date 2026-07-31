let plusBtn = document.getElementById('plusButton')
let minusBtn = document.getElementById('minusButton')
let countParagraph = document.getElementById('countParagraph')
let count = 0
plusBtn.addEventListener('click', ()=>{
    count += 1
    countParagraph.textContent = count
})
minusBtn.addEventListener('click', ()=>{
    count -= 1
    countParagraph.textContent = count
})

let helloInput = document.getElementById('helloInput')
let emoji = document.getElementById('emoji')
helloInput.addEventListener('change', ()=>{
    if(helloInput.value = 'hello'){
        emoji.textContent = '😀' 
    }
})