import User, { printName as printUserName, printAge } from '/07_es6_modules/01_tutorial/user.js'
// optional: change name of default imported object. We can change "User"
// to any string and used it as a variable.
// import User is the default
// To import non-default things, they are put in curly brackets.

const user = new User('bob',11)
console.log(user)
printUserName(user);
printAge(user);