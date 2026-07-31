function book(title, author, pages, year){
    this.title = title
    this.author = author
    this.pages = Number(pages)
    this.year = year
    this.readPerDay = function readPerDay(){
        let amount = this.pages / 7
        console.log(`in order to complete this book in 7 days, you are gonna have to read ${Math.round(amount)} pages per day`)
    }
}
let mybook = new book("1984", "George Orwell", "328", 1949)
mybook.readPerDay()