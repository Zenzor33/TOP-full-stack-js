/*
A static method is a method which you define on a class, but is not actually part of the instantiated object once its been created. A static method does not require an instance of the class to be created in order to be used. 

Static methods are often used as "helper methods," which are like little utilities that are relevant to that class but don't have an object bount to them...

???
*/

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a, b) {
    return a.height * a.width === b.height * b.width;
  }

  static isValidDimensions(width, height) {
    return width === height;
  }
}

let square1 = new Square(8);
let square2 = new Square(9);

// console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 6));
