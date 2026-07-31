let input = document.getElementById('textInput')
let output = document.getElementById('textOutput')
document.getElementById('printBtn').addEventListener('click', () => {
    for(let i = 0; i < input.value.length; i++){
        if(input.value[i] == ' '){
            continue
        } //დავამატე ეს იმიტომ რომ ცარიელი ადგილი თუ შეხვდება გამოტოვოს და მაგის შემდეგი გამოპრინტოს
        let element = document.createElement('p')
        let sliced = input.value.slice(0,i+1)
        element.textContent = sliced
        output.appendChild(element)
    }
})