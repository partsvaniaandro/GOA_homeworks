let defaultAge = 'unknown'
let defaultName = 'guest'
let defaultLastname = 'unknown'

let person = {
    age:16,
    name:'andria',
    lastName:'partsvania',
    promptInfo() {
        let inputName = prompt("Enter your name:");
        let inputAge = prompt("Enter your age:");
        let inputLastName = prompt("Enter your last name:");

        this.name = inputName || defaultName;
        this.age = inputAge || defaultAge;
        this.lastName = inputLastName || defaultLastname
    }
}

person.promptInfo();
console.log(person);