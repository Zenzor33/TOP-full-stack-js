// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User("John");
// console.log(user.name); // John

// user = new User(""); // Name is too short.

// Only change code below this line

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return 5/9 * (this.fahrenheit - 32) // returns celsius
  }
  set temperature(c) {
    this.fahrenheit = (c * 9) / 5 + 32 // sets to farhenheit? 
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius