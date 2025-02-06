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

// Loops through array, adds a card to card container
function printItems() {
    for (const item of myLibrary) {
        const card = document.createElement("div");
        card.innerHTML = 'Title: ' + item.title + '<br>Author: ' + item.author + '<br>Pages: ' + item.pages;
        cardContainer.appendChild(card);
    }
}

// Handles "new book" button 
const addBook = document.querySelector("#addBook");
// Selects sidebar where we'll add a new form on button press
const sidebar = document.querySelector("#sidebar");

// Generates form to allow user to enter new book
addBook.addEventListener("click", () => {
    // creates form
    const newForm = document.createElement("form");
    // adds form to sidebar
    sidebar.appendChild(newForm);

    // creates title entry point
    const titleTitle = document.createElement("label");
    titleTitle.innerHTML = "Book Title";
    const bookTitle = document.createElement("input");
    bookTitle.type = "text";
    bookTitle.name = "Book Title"
    bookTitle.placeholder = "Book Title";
    newForm.appendChild(titleTitle);
    newForm.appendChild(bookTitle);

    // creates author entry point
    const authorTitle = document.createElement("label");
    authorTitle.innerHTML = 'Book Author';
    const bookAuthor = document.createElement("input");
    bookAuthor.type = "text";
    bookAuthor.name = "Book Author";
    bookAuthor.placeholder = "Book Author";
    newForm.appendChild(authorTitle);
    newForm.appendChild(bookAuthor);

    // creates pages entry point
    const pageTitle = document.createElement("label");
    pageTitle.innerHTML = 'Pages';
    const bookPages = document.createElement("input");
    bookPages.type = "number";
    bookPages.name = "Book Pages";
    bookPages.placeholder = "Book Pages";
    newForm.appendChild(pageTitle);
    newForm.appendChild(bookPages);

    // Creates a submission button
    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.type = "button";
    newForm.appendChild(submit);

    // Logs item to array if submit button is clicked
    submit.addEventListener("click", () => {
        const newItem = addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value); 
        printItems();
    })
    // Find a way to remove previous data once submitted

})

// prevent user from clicking "Add new book" multiple times filling page...