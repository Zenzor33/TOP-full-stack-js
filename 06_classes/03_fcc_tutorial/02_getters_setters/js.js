/*
Getting and setters are used to define methods on a class, which are then used as if they are properties. Essentially, they look like properties, but they are actually methods of that class. 
*/

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestsForArea = 0;
  }

  // function [self executres?]
  get area() {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(4);
