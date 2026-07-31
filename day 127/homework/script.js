//1. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.all to handle the rejection and log the error message.
function func1(){
    let p1 = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('resolved!')
        }, 1000)
    })
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('rejected!')
        }, 2000)
    })
    let p3 = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('resolved!')
        }, 3000)
    })
    return Promise.all([p1, p2, p3])
}
func1().then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})

//2 Create three Promises that resolve or reject based on random conditions. Use Promise.all to log all resolved messages or handle the rejection.
function func2(name){
    const random = Math.random()
    return new Promise((resolve, reject)=>{
        if(random < 0.5){
            resolve(`${name} resolved!`)
        }
        else{
            reject(`${name} rejected!`)
        }
    })
}
let p1 = func2('andria')
let p2 = func2('saba')
let p3 = func2('lazare')
Promise.all([p1, p2, p3])
.then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})
//3. Create three Promises that resolve with numbers after random delays. Use Promise.all to get the results, then chain another .then to calculate and log the sum of the numbers.
function func3(){
    const randomTime = Math.random() * 1000
    const randomNum = Math.floor(Math.random() * 10) + 1
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(randomNum)
        }, randomTime)
    })
}
let pr1 = func3()
let pr2 = func3()
let pr3 = func3()
Promise.all([pr1, pr2, pr3]).then((result)=>{
    console.log(result)
    return result.reduce((sum, n)=>sum+n, 0)
}).then((sum)=>{
    console.log(sum)
})
//4. Create three Promises where one of them rejects after 2 seconds with an error message "Promise failed". Use Promise.race to handle the resolution or rejection and log the result or error.
function func4(Pnum){
    const randomTime = Math.random() * 1000
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(`${Pnum} rejected after ${Math.floor(randomTime)}ms`)
        }, randomTime)
    })
}
let promise1 = func4('p1')
let promise2 = func4('p2')
let promise3 = func4('p3')
Promise.race([promise1, promise2, promise3]).catch((error)=>console.log(error))