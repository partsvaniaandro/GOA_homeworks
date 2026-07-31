function sumOfDigits(num){
    sum = 0
    while(num > 0){
        sum = sum + num % 10
        num = (num - (num % 10)) /10
    }
    console.log(sum)
}
sumOfDigits(123)