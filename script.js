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
    if (myLibrary.length >= 20) { // Add limit to quantity of books in array
        alert("You can only enter up to 20 books");
    } else {
        const book = new Book(title, author, pages);
        myLibrary.push(book); // Stores into array 
        updateDisplay(); // Ensures that UI updates when adding new book
    }
}

// This will be used to later display the book entries to the page
const cardContainer = document.querySelector("#cards");

// Prints brand new items (resolves duplicate bug) 
function printSingleItem(book, index) {
    const card = document.createElement("div");
    card.setAttribute("data-index", index); // Allows us to delete items later
    card.classList.add("book-card");

    // Prints the card details
    card.innerHTML = `
        <strong>Title:</strong> ${book.title} <br>
        <strong>Author:</strong> ${book.author} <br>
        <strong>Pages:</strong> ${book.pages} <br>
    `;
    cardContainer.appendChild(card);

    // Creating and defining the delete button
    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Delete";
    deleteItem.addEventListener("click", () => deleteBook(index));
    card.appendChild(deleteItem);

    cardContainer.appendChild(card);

    // Keeping temporarily incase above innerHTML doesn't work
    // card.innerHTML = 'Title: ' + newBook.title + '<br>Author: ' + newBook.author + '<br>Pages: ' + newBook.pages + "<br>";
}

// Function for deleting book based on index, feeds from print single book
function deleteBook(index) {
    myLibrary.splice(index, 1) // This removes book from array
    updateDisplay(); // Re renders the UI
}

// Define update display
function updateDisplay() {
    cardContainer.innerHTML = "";
    myLibrary.forEach((book, index) => printSingleItem(book, index));
}


// Handles "new book" button and form logic
const addBook = document.querySelector("#addBook");
const sidebar = document.querySelector("#sidebar");

// Generates form to allow user to enter new book
addBook.addEventListener("click", () => {
    // creates form
    const newForm = document.createElement("form");
    newForm.id = "bookForm"; // Assigns ID to form
    sidebar.appendChild(newForm);

    // creates title entry point and label
    // Label
    const titleTitle = document.createElement("label");
    titleTitle.innerHTML = "Book Title";
    // Input
    const bookTitle = document.createElement("input");
    bookTitle.type = "text";
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
    bookPages.id = "bookPages"
    bookPages.placeholder = "Min 5 - Max 10,000";
    
    newForm.appendChild(pageTitle);
    newForm.appendChild(bookPages);

    // Creates a submission button
    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.type = "submit";
    newForm.appendChild(submit);

    // Logs item to array if submit button is clicked
    newForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent default submission behaviour

        // Validation and empty value prevention
        if (bookTitle.value.trim() === "") {
            alert("Please enter a Book Title");
        } else if (bookAuthor.value.trim() === "") {
            alert("Please enter a Book Author");
        } else if (bookPages.value.trim() === "" || isNaN(bookPages.value)) {
            alert("Please enter a valid number of pages");
        } else if (parseInt(bookPages.value) > 10000) {
            alert("Please enter a valud under 10,000");
        } else {
            // Adds book to library
            addBookToLibrary(bookTitle.value.trim(), bookAuthor.value.trim(), parseInt(bookPages.value));

            // clears form fields
            newForm.reset();
            
        }
    })
    sidebar.removeChild(addBook);

    // Add quantity limit for user on UI
    const limitFeedback = document.createElement("p");
    limitFeedback.innerHTML = "You may add up to 20 books";
    newForm.appendChild(limitFeedback);
})


// Add a limit for quantity, maybe set to 20 or so books, add info to page


// Allow a user to toggle if a book has been "Read" or not