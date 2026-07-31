
function listAdd(){
    let N = prompt("enter your number: ")
    N = parseInt(N)
    let arrayNum = []
    for(let i = 1; i <= N; i++){
        arrayNum.push(i)
    }
    console.log(arrayNum)
}
listAdd(10)