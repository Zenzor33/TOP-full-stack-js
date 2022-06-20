/* 
The purpose of this exercise is to learn how to use data attributes to link together my HTML elements and javascript objects.

The program will use a data attribute as an identifier. 

Each time that javascript creates a new "book" object to store into the library array, inside the book object will be a property called "identifier." The identifier will have a value assigned to it from a function that returns an incremementally increasing integer each time it executes. 

The identifier will also be stored as a data attribute on the card-main div. 

*/

// Create a basic object constructor with three properties, one of which is named identifier
// Write a function to add new objects to an array

let count = 0;
const counts = function () {
  count += 1;
  return count;
};

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

Book.prototype.something = function () {
  let newDiv = document.createElement("div");
  const body = document.querySelector("body");
  newDiv.setAttribute("data-id", `${this.id}`);
  body.appendChild(newDiv);
};

// Add the HTML creation to the object's prototype?

const expanse = new Book("expanse", "someone", "35", "yes", counts());
expanse.something();
const oldman = new Book("expanse", "someone", "35", "yes", counts());
oldman.something();

// let newDiv = document.createElement("div");
// const body = document.querySelector("body");
// newDiv.setAttribute("data-id", "1");
// body.appendChild(newDiv);

/* 
// setting data-foo
var el = document.querySelector('div');
el.setAttribute('data-foo', 'Hello World!');
*/
