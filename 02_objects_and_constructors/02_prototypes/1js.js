// tutorial: https://youtu.be/XskMWBXNbp0?list=LL

// // create object
// let animal = {};
// // add properties
// animal.name = "leo";
// animal.energy = 10;

// animal.eat = function (amount) {
//   console.log(`${this.name} is eating`);
//   this.energy += amount;
// };

// animal.sleep = function (length) {
//   console.log(`${this.name} is sleeping`);
//   this.energy += length;
// };

// animal.play = function (length) {
//   console.log(`${this.name} is playing`);
//   this.energy += length;
// };

//
// WRAP INTO OBJECT CONSTRUCTOR
//

// function Animal(name, energy) {
//   // create object
//   let animal = {};
//   // add properties
//   animal.name = name;
//   animal.energy = energy;

//   animal.eat = function (amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount;
//   };

//   animal.sleep = function (length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length;
//   };

//   animal.play = function (length) {
//     console.log(`${this.name} is playing`);
//     this.energy += length;
//   };
//   return animal;
// }

// const leo = Animal("Leo", 7);
// const snoop = Animal("Snoop", 10);

//
// CREATE OBJECT WITH SPECIFIC METHODS. WE SAVE MEMORY USAGE BY REFERENCING THE METHODS FROM ONE OBJECT RATHER THAN CREATING METHODS IN EACH OBJECT
//
// This solution still has drawbacks. You need to remember to add the new method to the function.
//

// const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating`);
//       this.energy += amount;
//     },

//     sleep(length) {
//       console.log(`${this.name} is sleeping`);
//       this.energy += length;
//     },

//     play(length) {
//       console.log(`${this.name} is playing`);
//       this.energy += length;
//     },
//   };

// function Animal(name, energy) {
//     // create object
//     let animal = {};
//     // add properties
//     animal.name = name;
//     animal.energy = energy;
//     animal.eat = animalMethods.eat
//     animal.sleep = animalMethods.sleep
//     animal.play = animalMethods.play

//     return animal;
//   }

//   const leo = Animal("Leo", 7);
//   const snoop = Animal("Snoop", 10);

//
// What we want is something that allows Animal to always reference the methods in the animalMethods object.
//

// Into to object.create

const parent = {
  name: "Stacey",
  age: 35,
  heritage: "Irish",
};

// we want child to have the exact same heritage as the parent

const child = Object.create(parent);
child.name = "Ryan";
child.age = 7;

// console.log(child.name);
// console.log(child.heritage);
