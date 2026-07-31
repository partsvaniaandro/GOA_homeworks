//შექმენით ფუნქცია რომელიც იღებს key-ები და value-ების მასივებს. თქვენი მიზანია დააბრუნოთ ობიექტი შესაბამისი key-value-ბით.
let objArray = [
    ['name', 'andria'],
    ['surname', 'partsvania'],
    ['age', '16']]
function constructor(arr){  
    this.obj = {}
    for(let i = 0; i<arr.length; i++){
        this.obj[arr[i][0]] = arr[i][1]
    }
    this.CL = function(){
        console.log(this.obj)
    }
}
myObj = new constructor(objArray)
myObj.CL()