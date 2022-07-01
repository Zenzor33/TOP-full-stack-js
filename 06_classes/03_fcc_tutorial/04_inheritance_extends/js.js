/*
The extends keyword allows you to achieve the concept of inheritance in javascript classes. You use extends whenever you have a parent class to create a child class. You want to copy all of the parents class features, then add a bit extra to the child class.
*/

class Person {
  constructor(_age, _name) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor(_age, _name, _yearsOfExperience) {
    super(_name, _age);

    // custom behavior
    this._yearsOfExperience = _yearsOfExperience;
  }
  code() {
    console.log(`${this.name} is coding`);
  }
}

// let person1 = new Person("jeff", 45);
// let programmer1 = new Programmer("Dom", 56, 12);

// programmer1.code();

const programmers = [
  new Programmer("Dom", 56, 12),
  new Programmer("Jeff", 24, 4),
];

function developSoftware(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}

developSoftware(programmers);
