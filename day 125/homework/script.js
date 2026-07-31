//1) შექმენი Promise, რომელიც resolve-დება 2 წამში ტექსტით:"Operation successful!" და გამოიტანე then-ით.
function func1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Operation successful')
        }, 2000)
    })
}
func1().then((msg)=>{
    console.log(msg)
})

//2) შექმენი Promise, რომელიც 3 წამში reject-დება ტექსტით: "Something went wrong!" და გამოიტანე catch-ით.
function func2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('Something went wrong')
        }, 3000)
    })
}
func2().catch((err)=>{
    console.log(err)
})