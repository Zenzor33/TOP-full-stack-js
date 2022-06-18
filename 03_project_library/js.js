let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = Boolean(read === "y");
}

Book.prototype.info = function () {
  const didRead = () => (this.read ? "READ" : "NOT READ");

  return `${this.title} by ${this.author}, ${
    this.numPages
  } pages, is ${didRead()}`;
};

// Sample books. Delete later
const expanse = new Book("The Expanse", "dr.someone", 350, "y");
const oldMansWar = new Book("Old Man's War", "Scalzi", "300", "n");

// add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Sample inputs. Delete later.
addBookToLibrary(expanse);
addBookToLibrary(oldMansWar);

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

const btnNewBook = document.querySelector("#btnBook");
btnNewBook.addEventListener("click", createForm);

function createForm(e) {
  console.log(e);
  console.log("proceed");
}

// ----------------------

// Add a button on each book’s display to change its read status.

// add event listener to card-icon-toggle div
/* the callback function should:
1) Toggle text of read div
2) Optional: change something in the image div to indicate status
*/

// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
