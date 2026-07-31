class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. "${book.title}" by ${book.author}`);
        });
    }
}

const book1 = new Book("ვეფხისტყაოსანი", "შოთა რუსთაველი");
const book2 = new Book("დათა თუთაშხია", "ჭაბუა ამირეჯიბი");

const library = new Library();
library.addBook(book1);
library.addBook(book2);

library.listBooks();