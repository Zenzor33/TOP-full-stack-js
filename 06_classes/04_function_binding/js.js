// // Problem:

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };

// setTimeout(user.sayHi, 1000); // Hello, undefined!

// Solution: bind

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  sayHi() {
    console.log("Another user in setTimeout!");
    },
};
