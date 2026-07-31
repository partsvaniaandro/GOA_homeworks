function multiply(){
    while(true){
        let num1 = prompt('enter first number: ')
        let num2 = prompt('enter second number: ')
        let result = num1 * num2
        console.log(result)
        let exitOrNo = prompt('exit? ')
        if (exitOrNo.toLowerCase() == 'yes'){
            console.log('exiting')
            return;
        }
    }

}
multiply()