function func(password){
    const validchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    for(let i = 0; i<password.length; i++){
        let indicator = false
    
        for(let j = 0; j < validchars.length; j++){
            if (password[i] === validchars[j]){
                indicator = true
                break;
            }
        }
        if(!indicator){
            console.log("error")
            return
        }
    }
}
func(ais)
