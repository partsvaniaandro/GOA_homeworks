import MathJs from "./utils/Math.js";
import Formatter from "./utils/Formatter.js";
import DbInfo from "./models/DbInfo.js";
import Helper from "./utils/Helper.js";
const math = MathJs()
const format = Formatter()
const helper = Helper()

//math
console.log(math.add(0, 1))
console.log(math.subtract(3, 1))
console.log(math.multiply(1, 3))
console.log(math.divide(8, 2))

//formatter
const str = 'hello'
const capitalizedStr = format.capitalize(str)
console.log(capitalizedStr)

//db
const dbName = DbInfo.name
console.log(dbName)

//helper
const sum = helper.sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(sum)

const isEven = helper.isEven(2)
if(isEven){
    console.log('even')
}

const randomNum = helper.randomNum(3, 7)
console.log(randomNum)