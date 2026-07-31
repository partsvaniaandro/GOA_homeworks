function aTob(a, b){
    if(a <= b){
        for(let i = a; i <= b; i++){
            console.log(i)
        }
    }
    else{
        console.log("a must be smaller or equal to b")
    }
}
atob(1, 10)