// Stores list of books
const myLibrary = [];

// Constuctor for book objects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Function to build book, calls the book object
function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    // Stores into array to later be pushed into myLibrary
    myLibrary.push(book);
}

// This will be used to later display the book entries to the page
const cardContainer = document.querySelector("#cards");

const harryPotter = addBookToLibrary("Harry Potter", "JK Rowling", 100);
const lordOfRings = addBookToLibrary("LOTR", "Tolkien", 1000);

// Loops through array, adds a card to card container
function printItems() {
    for (const item of myLibrary) {
        const card = document.createElement("div");
        card.innerHTML = 'Title: ' + item.title + '<br>Author: ' + item.author + '<br>Pages: ' + item.pages;
        cardContainer.appendChild(card);
    }
}

printItems()

// Handles "new book" button 
const addBook = document.querySelector("#addBook");
// Selects sidebar where we'll add a new form on button press
const sidebar = document.querySelector("#sidebar");

// Generates form to allow user to enter new book
addBook.addEventListener("click", () => {
    const newForm = document.createElement("div");
    newForm.innerHTML = 'Hello';
    sidebar.appendChild(newForm);
})