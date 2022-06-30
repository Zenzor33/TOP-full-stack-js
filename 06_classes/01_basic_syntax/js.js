// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// // class is a function
// console.log(typeof User); // function

// // ...or, more precisely, the constructor method
// console.log(User === User.prototype.constructor); // true

// // The methods are in User.prototype, e.g:
// console.log(User.prototype.sayHi); // the code of the sayHi method

// // there are exactly two methods in the prototype
// console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// Class Expression

// // "Named Class Expression"
// // (no such term in the spec, but that's similar to Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass); // MyClass name is visible only inside the class
//   }
// };

// new User().sayHi(); // works, shows MyClass definition

// console.log(MyClass); // error, MyClass name isn't visible outside of the class

// Dynamically created classes:
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello
