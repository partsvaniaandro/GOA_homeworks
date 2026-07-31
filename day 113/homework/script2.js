class Book {
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
    get title(){
        return this.title
    }
    get author(){
        return this.author
    }
    get pages(){
        return this.pages
    }
    set title(el){
        this.title = el
    }
    set author(el){
        this.author = el
    }
    set pages(el){
        this.pages = el
    }
}