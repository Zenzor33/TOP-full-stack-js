const arr = [];

function createBook(e) {
  e.preventDefault();
  book_title = document.forms["book_form"].elements["book_title"].value;
  book_author = document.forms["book_form"].elements["book_author"].value;
  book_pages = document.forms["book_form"].elements["book_pages"].value;
  book_read = document.forms["book_form"].elements["book_read"].value;

  let book = new Book(book_title, book_author, book_pages, book_read);
  myLibrary.push(book);
}

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", createBook);

// library stuff

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
