//*შევქმენი სია სადაც შეინახება შეტანილი ტექსტი
const Texts = []
function checkText(){
    //*ვქმნი ცვლადს სადაც მომხმარებელი შეიტანს ტექსტს
    const userInput = prompt("please enter your text")
    //!თუ ტექსტი უდრის null-ს ან არაფერი არ არის ჩაწერილი, თავიდან მეორდება.
    if(userInput === null || userInput === ""){
        alert("text is invalid")
        return
    }
    //!თუ იგივე ტექსტი არის შეტანილი გამოქავს ტექსტი რომელიც ამბობს ამას.
    if(Texts.includes(userInput)){
        alert("this text has been entered already")
    }
    //!და თუ არ არის, ამატებს მომხმარებლის ტექსტს სიაში
    else{
        Texts.push(userInput)
        alert("added text")
    }
}
checkText()