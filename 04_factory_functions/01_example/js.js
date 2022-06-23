// factory functions simply set up and return the new object when you call the function

const personFactory = (name, age) => {
  const sayHello = () => console.log("hello!");
  return { name, age, sayHello };
};

const jeff = personFactory("jeff", 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

// // For reference, here is the same thing created using the constructor pattern:

// const Person = function(name, age) {
//     this.sayHello = () => console.log('hello!');
//     this.name = name;
//     this.age = age;
//   };

//   const jeff = new Person('jeff', 27);

// Scope

var nameT = "Todd";
var scope1 = function () {
  // name is available here
  console.log(nameT);

  var scope2 = function () {
    // name is available here too
    var nameX = "xavier";
    var scope3 = function () {
      console.log(nameX);
      // name is also available here!
    };
  };
};

var sayHello = function (name) {
  var text = "Hello, " + name;
  return function () {
    console.log(text);
  };
};

var helloTodd = sayHello("Todd");

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("outerVariable: " + outerVariable);
    console.log("innerVariable: " + innerVariable);
  };
}

// Remember, the function definition executes first (on line 58), then "disappears" from scope.
const newFunction = outerFunction("outside");
// "outside" gets assigned as the outerVariable (of newFunction) while "inside" remains undefined.""
newFunction();
// inside gets defined
newFunction("inside");

// new example

// function greeting() {
//   let message = "hi";
//   function sayHi() {
//     console.log(message);
//   }
//   sayHi();
// }

function greeting() {
  let message = "hi";

  function sayHi() {
    console.log(message);
  }
  return sayHi;
}

let hi = greeting();
hi(); // still can access the message variable

const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction("taco");

// printString(); // ERROR!! *inaccessible scope
// capitalizeString(); // ERROR!! *inaccessible scope
// taco.capitalizeString(); // ERROR!! *no return value, thus inaccessible
taco.printString(); // this prints "----TACO----"

//

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

// Add all of the own properties of beagle to the array ownProps

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

function Animal() {
  this.color = "red";
}
Animal.prototype = {
  age: 34,
};
function Bird() {
  this.legs = 4;
}
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird();
duck.constructor = Bird;

let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    },
  };
})();

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        console.log("wh");
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

// private scope practice

const calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  return {
    add,
  };

  //   function privateMethod(a, b) {
  //     console.log(add(a, b));
  //   }

  //   return {
  //     publicMethod: function (a, b) {
  //       privateMethod(a, b);
  //     },
  //   };
})();

const db = (function () {
  const userName = "Roznez";
  const password = "moo";

  return {
    userName,
  };
})();
