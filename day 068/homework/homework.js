let wordsList = ['apple', 'pineapple', 'orange']
function enterText(text){
    for(let i = 0; i < wordsList.length; i++){
        if (text == wordsList[i]){
            console.log(`you already entered the word: ${text}`)
            return
        }
    }
    wordsList.push(text)
}


enterText('car')
console.log(wordsList)