//*სწორი პაროლის ცვლადი
const correctPassword = "12348765"
function checkPass(){
    //*ციკლი არის სამუდამო სანამ არ გამოიცნობს პაროლს ან არაფერს არ ჩაწერს მომხმარებელი
    while(true){
        //*მომხმარებლის შეყვანილი პაროლის ცვლადი
        const userInput = prompt("enter your password")
        //!თუ შეტანილი ინფორმაცია უდრის null-ს ან არაფერს, ციკლი გაჩერდება
        if(userInput === null || userInput === ""){
            alert("canceled")
            break
        }
        //!თუ შეტანილი ინფორმაცია იგივეა სწორ პაროლთან, ციკლი გაჩერდება
        if(userInput === correctPassword){
            alert("acces granted")
            break
        }
        //!თუ შეტანილი ინფორმაცია სხვა რამე არის, არასწორ პაროლად აღიქვამს კოდი და ციკლი თავიდან გაეშვება.
        else{
            alert("incorrect password")
        }
    }
}
checkPass()
