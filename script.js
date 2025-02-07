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

// Prints brand new items (resolves duplicate bug) 
function printSingleItem() {
    const card = document.createElement("div");
    // Uses pop to print the last element added
    const newBook = myLibrary.pop();
    card.innerHTML = 'Title: ' + newBook.title + '<br>Author: ' + newBook.author + '<br>Pages: ' + newBook.pages;
    cardContainer.appendChild(card);
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
    // make mandatory

    newForm.appendChild(titleTitle);
    newForm.appendChild(bookTitle);

    // creates author entry point
    const authorTitle = document.createElement("label");
    authorTitle.innerHTML = 'Book Author';
    const bookAuthor = document.createElement("input");
    bookAuthor.type = "text";
    bookAuthor.name = "Book Author";
    bookAuthor.placeholder = "Book Author";
    // make mandatory field

    newForm.appendChild(authorTitle);
    newForm.appendChild(bookAuthor);

    // creates pages entry point
    const pageTitle = document.createElement("label");
    pageTitle.innerHTML = 'Pages';
    const bookPages = document.createElement("input");
    bookPages.type = "number";
    bookPages.name = "Book Pages";
    bookPages.placeholder = "Book Pages";
    // make mandatory 
    
    newForm.appendChild(pageTitle);
    newForm.appendChild(bookPages);

    // Creates a submission button
    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.type = "reset";
    newForm.appendChild(submit);

    // Logs item to array if submit button is clicked
    submit.addEventListener("click", () => {
        const newItem = addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value); 
        printSingleItem();
    })
    // Removes button when clicked 
    sidebar.removeChild(addBook);
})

// prevent user from clicking "Add new book" multiple times filling page...
// Add a limit for quantity, maybe set to 20 or so books, add info to page