/*

    Class -> Object

    Instance Properties: what they have
        - name
        - age
        - weight

    Instance Methods: what they do
        - talk
        - run
        - jump
*/

class Rectangle {
  // setup
  constructor(_width, _height, _color) {
    /* Every class has a constructor. A constructor is basically a method that is run once during the life of the objects. */
    console.log("the rectangle is being created");
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  // Instance methods are defined under the constructor
  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    return `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`;
  }
}

let myRectangle1 = new Rectangle(5, 3, "blue"); //Note: 'new' calls the constructor method!
let myRectangle2 = new Rectangle(10, 5, "red");
