let correctPassword = '12348765'
function correctPass(){
    while(true){
        let passwordInput = prompt('enter password')
        if(passwordInput == correctPassword){
            return 'correct!'
        }
    }
}