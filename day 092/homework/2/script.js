function higherOrLower(num1, num2){
    let higher = num1 > num2 ? num1:
                 num1 < num2 ? num2:
                 'equal'
    let lower = num1 > num2 ? num2:
    num1 < num2 ? num1:
    'equal'


    higher == 'equal'
    ? console.log('both numbers are equal')
    : console.log(`${higher} is higher than ${lower}`)

}