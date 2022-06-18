// CREATE OBJECT WITH SPECIFIC METHODS. WE SAVE MEMORY USAGE BY REFERENCING THE METHODS FROM ONE OBJECT RATHER THAN CREATING METHODS IN EACH OBJECT

// This solution still has drawbacks. You need to remember to add the new method to the function.

// const animalMethods = {
//   eat(amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount;
//   },

//   sleep(length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length;
//   },

//   play(length) {
//     console.log(`${this.name} is playing`);
//     this.energy += length;
//   },
// };

//
// // The following solution is good, but javascrip has a built-in way of doing it.
//

// function Animal(name, energy) {
//   let animal = Object.create(Animal.prototype);
//   animal.name = name;
//   animal.energy = energy;

//   return animal;
// }

// Animal.prototype.eat = function (amount) {
//   console.log(`${this.name} is eating`);
//   this.energy += amount;
// };
// Animal.prototype.sleep = function (length) {
//   console.log(`${this.name} is sleeping`);
//   this.energy += length;
// };
// Animal.prototype.play = function (length) {
//   console.log(`${this.name} is playing`);
//   this.energy += length;
// };

// const leo = Animal("Leo", 7);
// const snoop = Animal("Snoop", 10);

/* A prototype in javascript is a property in a function that points to an object

The solution to this problem is simply to add the methods to the function's prototype.*/

AnimalWithNew.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};
AnimalWithNew.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};
AnimalWithNew.prototype.play = function (length) {
  console.log(`${this.name} is playing`);
  this.energy += length;
};

function AnimalWithNew(name, energy) {
  // let this = Object.create(AnimalWithNew.prototype);
  this.name = name;
  this.energy = energy;

  // return this;
}

const leoWithNew = new AnimalWithNew("Leo", 7);
const snoopWithNew = new AnimalWithNew("Snoop", 10);
