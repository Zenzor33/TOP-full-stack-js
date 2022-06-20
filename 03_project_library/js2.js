// Event listeners (non-DOM created elements)

const btnAddNewBook = document.querySelector("#btnBook");
btnAddNewBook.addEventListener("click", () => {
  popup = document.querySelector(".form-popup");
  popup.classList.remove("hidden");
});

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", createBook);

const btnCancel = document.querySelector("#btnCancel");
btnCancel.addEventListener("click", resetAndClosePopup);

// Object constructor

let myLibrary = [];

let count = 0;
function counts() {
  count += 1;
  return count;
}

function Book(title, author, numPages, read, id) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read; // 'yes or 'no'
  this.id = id;
}

Book.prototype.createCard = function () {
  const divMain = document.querySelector(".main");
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.setAttribute("id", `${this.id}`);
  divMain.appendChild(divCard);

  const divCardTitle = document.createElement("div");
  divCardTitle.classList.add("card-title");
  divCard.appendChild(divCardTitle);
  let newContent = document.createTextNode(this.title);
  divCardTitle.appendChild(newContent);

  const divCardAuthor = document.createElement("div");
  divCardAuthor.classList.add("card-author");
  divCard.appendChild(divCardAuthor);
  newContent = document.createTextNode(this.author);
  divCardAuthor.appendChild(newContent);

  const divCardPages = document.createElement("div");
  divCardPages.classList.add("card-pages");
  divCard.appendChild(divCardPages);
  newContent = document.createTextNode(this.numPages);
  divCardPages.appendChild(newContent);

  const divCardFooter = document.createElement("div");
  divCardFooter.classList.add("card-footer");
  divCard.appendChild(divCardFooter);

  const divCardDidRead = document.createElement("div");
  divCardDidRead.classList.add("card-didRead");

  // refactor later
  divCardFooter.appendChild(divCardDidRead);
  if (this.read === "yes") {
    newContent = document.createTextNode("I've read it");
    divCardDidRead.appendChild(newContent);
  } else if (this.read === "no") {
    newContent = document.createTextNode("I've not read it");
    divCardDidRead.appendChild(newContent);
  } else {
    console.log("error at book_read y/n");
  }

  const divCardIcons = document.createElement("div");
  divCardIcons.classList.add("card-icons");
  divCardFooter.appendChild(divCardIcons);

  // delete button
  const divCardIcon1 = document.createElement("div");
  divCardIcon1.classList.add("card-icon-delete");
  divCardIcon1.addEventListener("click", something);
  divCardIcons.appendChild(divCardIcon1);
  const imgDel = document.createElement("img");
  imgDel.setAttribute("src", "img/trash-can-outline.png");
  divCardIcon1.appendChild(imgDel);
};

function something(e) {
  // change functionality. Function should search for the indexOf the object's matching identifier. Also delete the element of the matching identifier.

  // The count variable can't be used. And the 'this' can't be used. I can find the parent element id, maybe.

  //   let parentId =

  let index = myLibrary.map((object) => object.id).indexOf(count);
  myLibrary.splice(index, 1);

  let cardElement = document.getElementById(count);
  console.log(cardElement);

  cardElement.remove();
}

function createBook(e) {
  e.preventDefault();

  let book_title = document.forms["book_form"].elements["book_title"].value;
  let book_author = document.forms["book_form"].elements["book_author"].value;
  let book_pages = document.forms["book_form"].elements["book_pages"].value;
  let book_read = document.forms["book_form"].elements["book_read"].value;
  let id = counts();

  let book = new Book(book_title, book_author, book_pages, book_read, id);
  myLibrary.push(book);
  book.createCard();
  resetAndClosePopup();
}

function resetAndClosePopup() {
  popup = document.querySelector(".form-popup");
  popup.classList.add("hidden");
  book_form.reset();
}
