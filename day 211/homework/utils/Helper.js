const Helper = () => ({
    sum(...numbers){
        return(
            numbers.reduce((total, num) => {
                if(typeof num !== 'number'){
                    throw new Error(`${num} is not a number`)
                }
                return total + num
            }, 0)
        )
    },

    isEven(num){
        if(typeof num !== 'number'){
            throw new Error(`${num} is not a number`)
        }
        let result = num % 2 === 0 ? true : false
        return result
    },

    isOdd(num){
        if(typeof num !== 'number'){
            throw new Error(`${num} is not a number`)
        }
        let result = num % 2 !== 0 ? true : false
        return result
    },

    randomNum(min, max){
        if(min > max){
            console.log(`min:${min} is bigger than max:${max}`)
            return
        }
        return(
            Math.floor(Math.random() * (max - min) + 1) + min
        )
    }
})
export default Helper