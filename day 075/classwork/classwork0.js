function bank(amount, owner){
    this.amount = parseInt(amount)
    this.owner = owner
    this.deposit = function deposit(Dep_amount){
        Dep_amount = parseInt(Dep_amount)
        this.amount = this.amount + Dep_amount
    }
    this.withdraw = function withdraw(Wit_amount){
        Wit_amount = parseInt(Wit_amount)
        if(Wit_amount > this.amount){
            console.log("insufficent balance")
        }
        else{
            this.amount = this.amount - Wit_amount
        }
        
    }
    this.showBalance = function showBalance(){
        console.log(`${this.owner}, your account balance is: ${this.amount}`)
    }
}
let account = new bank(1000, "andria")
account.withdraw(1100)
account.showBalance()
