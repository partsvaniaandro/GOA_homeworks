function checkpass(){
    const password = document.getElementById("pass_input").value
    const email = document.getElementById("email_input").value
    const checkbox = document.getElementById("agree")
    
    //check email
    if (email === ""){
        document.getElementById("message").textContent = "email is required";
        return;
    }




    //check if empty
    if (password === "") {
        document.getElementById("message").textContent = "Password is required";
        document.getElementById("pass_length").style.color = "red";
        document.getElementById("symbols").style.color = "red";
        document.getElementById("empty_spaces").style.color = "red";
        return;
    }
    //check symbols
    const validSymbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._1234567890 "
    let symbolsValid = true


    for(let i = 0; i<password.length; i++){
        let isvalidsymbol = false

        for(let j =0; j<validSymbols.length; j++){
            if(password[i] === validSymbols[j]){
                isvalidsymbol = true
                break;
            }
        }
        if (!isvalidsymbol) {
            symbolsValid = false;
            document.getElementById("message").textContent = "Invalid Symbols";
            document.getElementById("symbols").style.color = "red";
            return; 
        }
    }
    if (symbolsValid) {
        document.getElementById("message").textContent = "";
        document.getElementById("symbols").style.color = "green";
    }



    //check empty spaces
    for(let i = 0; i<password.length; i++){
        if(password[i] === " "){
            document.getElementById("message").textContent="you cant have empty spaces in your password"
            document.getElementById("empty_spaces").style.color = "red"
            return;
    }
    }
    document.getElementById("message").textContent = "";
    document.getElementById("empty_spaces").style.color = "green";


    //check length
    if(password.length < 4){
        document.getElementById("message").textContent = "password is too short";
        document.getElementById("pass_length").style.color = "red";
        return;
    }
    else if(password.length > 12){
        document.getElementById("message").textContent = "password is too long";
        document.getElementById("pass_length").style.color = "red";
        return;
    }
    else{
        document.getElementById("message").textContent = "";
        document.getElementById("pass_length").style.color = "green";
    }


    if(checkbox.checked){
        console.log("agreed")
    }
    else{
        document.getElementById("message").textContent = "you must agree with terms and conditions";
        return;
    }
    
    window.location.href = "index2.html";

    
}



document.getElementById("check_pass").addEventListener("click", checkpass);