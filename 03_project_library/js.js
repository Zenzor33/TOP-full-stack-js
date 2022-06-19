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

const arr = [];

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", createBook);

const btnAddNewBook = document.querySelector("#btnBook");
btnAddNewBook.addEventListener("click", () => {
  popup = document.querySelector(".form-popup");
  popup.classList.remove("hidden");
});

const btnCancel = document.querySelector("#btnCancel");
btnCancel.addEventListener("click", resetAndClosePopup);

function createBook(e) {
  e.preventDefault();

  book_title = document.forms["book_form"].elements["book_title"].value;
  book_author = document.forms["book_form"].elements["book_author"].value;
  book_pages = document.forms["book_form"].elements["book_pages"].value;
  // BUG. BOOK_READ needs BOOLEAN value
  book_read = document.forms["book_form"].elements["book_read"].value;

  let book = new Book(book_title, book_author, book_pages, book_read);
  myLibrary.push(book);
  createCard(book_title, book_author, book_pages, book_read);
  resetAndClosePopup();
}

function resetAndClosePopup() {
  popup = document.querySelector(".form-popup");
  popup.classList.add("hidden");
  book_form.reset();
}

function createCard(book_title, book_author, book_pages, book_read) {
  const divMain = document.querySelector(".main");
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.id = book_title;
  divMain.appendChild(divCard);

  const divCardTitle = document.createElement("div");
  divCardTitle.classList.add("card-title");
  divCard.appendChild(divCardTitle);
  let newContent = document.createTextNode(book_title);
  divCardTitle.appendChild(newContent);

  const divCardAuthor = document.createElement("div");
  divCardAuthor.classList.add("card-author");
  divCard.appendChild(divCardAuthor);
  newContent = document.createTextNode(book_author);
  divCardAuthor.appendChild(newContent);

  const divCardPages = document.createElement("div");
  divCardPages.classList.add("card-pages");
  divCard.appendChild(divCardPages);
  newContent = document.createTextNode(book_pages);
  divCardPages.appendChild(newContent);

  const divCardFooter = document.createElement("div");
  divCardFooter.classList.add("card-footer");
  divCard.appendChild(divCardFooter);

  const divCardDidRead = document.createElement("div");
  divCardDidRead.classList.add("card-didRead");
  divCardDidRead.id = `${book_title}-read`;
  divCardFooter.appendChild(divCardDidRead);
  if (book_read === "yes") {
    newContent = document.createTextNode("I've read it");
    divCardDidRead.appendChild(newContent);
  } else if (book_read === "no") {
    newContent = document.createTextNode("I've not read it");
    divCardDidRead.appendChild(newContent);
  } else {
    console.log("error at book_read y/n");
  }

  const divCardIcons = document.createElement("div");
  divCardIcons.classList.add("card-icons");
  divCardFooter.appendChild(divCardIcons);

  const divCardIcon1 = document.createElement("div");
  divCardIcon1.classList.add("card-icon-delete");
  divCardIcon1.addEventListener("click", function () {
    let index = myLibrary.map((object) => object.title).indexOf(book_title);
    myLibrary.splice(index, 1);

    const element = document.getElementById(book_title);
    element.remove();
  });
  divCardIcons.appendChild(divCardIcon1);
  const imgDel = document.createElement("img");
  imgDel.setAttribute("src", "img/trash-can-outline.png");
  divCardIcon1.appendChild(imgDel);

  const divCardIcon2 = document.createElement("div");
  divCardIcon2.classList.add("card-icon-toggle");
  divCardIcons.appendChild(divCardIcon2);
  const imgToggle = document.createElement("img");
  imgToggle.setAttribute("src", "img/check.png");
  divCardIcon2.appendChild(imgToggle);

  divCardIcon2.addEventListener("click", function () {
    // select the textnode
    const strRead = document.getElementById(`${book_title}-read`);
    const indexOfTitle = myLibrary
      .map((object) => object.title)
      .indexOf(book_title);
    // toggle the textnode
    if (strRead.textContent === "I've read it") {
      strRead.textContent = "I've not read it";
    }
    // select the array
    // toggle the array
  });
}
