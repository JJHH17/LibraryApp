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

// Handles "new book" button and form logic
const addBook = document.querySelector("#addBook");
// Selects sidebar where we'll add a new form on button press
const sidebar = document.querySelector("#sidebar");

// Generates form to allow user to enter new book
addBook.addEventListener("click", () => {
    // creates form
    const newForm = document.createElement("form");
    // adds form to sidebar
    sidebar.appendChild(newForm);

    // creates title entry point and label
    // Label
    const titleTitle = document.createElement("label");
    titleTitle.innerHTML = "Book Title";
    // Input
    const bookTitle = document.createElement("input");
    bookTitle.type = "text";
    bookTitle.name = "BookTitle"
    bookTitle.id = "bookTitle";
    bookTitle.placeholder = "Min 1 - Max 20";
    bookTitle.maxLength = 20;

    newForm.appendChild(titleTitle);
    newForm.appendChild(bookTitle);

    // creates author entry point and label
    // Label
    const authorTitle = document.createElement("label");
    authorTitle.innerHTML = 'Book Author';
    // Input
    const bookAuthor = document.createElement("input");
    bookAuthor.type = "text";
    bookAuthor.name = "BookAuthor";
    bookAuthor.id = "bookAuthor";
    bookAuthor.placeholder = "Min 1 - Max 20";
    bookAuthor.maxLength = 20;

    newForm.appendChild(authorTitle);
    newForm.appendChild(bookAuthor);

    // creates pages entry point and label
    // Label
    const pageTitle = document.createElement("label");
    pageTitle.innerHTML = 'Pages';
    // Input
    const bookPages = document.createElement("input");
    bookPages.type = "number";
    bookPages.name = "BookPages";
    bookPages.id = "bookPages"
    bookPages.placeholder = "Min 5 - Max 10,000";
    
    newForm.appendChild(pageTitle);
    newForm.appendChild(bookPages);

    // Creates a submission button
    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.type = "reset";
    newForm.appendChild(submit);

    // Logs item to array if submit button is clicked
    submit.addEventListener("click", () => {

        // Making fields mandatory - using if statement 
        if (bookTitle.value.length == 0) {
            alert("Please enter a Book Title");
        } else if (bookAuthor.value.length == 0) {
            alert("Please enter a Book Author");
        } else if (bookPages.value.length == 0) {
            alert("Please enter a Book Length in pages.")
        } else if (bookPages.value > 10000) {
            alert("Please enter a value less than 10,000")
        } else {
            const newItem = addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value); // Adds to array 
            printSingleItem();
        }
    })
    // Removes button when clicked 
    sidebar.removeChild(addBook);

    // Addition of delete button
    // Deletes an item when added


})


// Add a limit for quantity, maybe set to 20 or so books, add info to page


// Allow a user to toggle if a book has been "Read" or not