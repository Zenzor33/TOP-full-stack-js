/*
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
*/

function sumRange(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

/*
Question 2: Power function
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

Sample:

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
*/

function power(base, exp) {
  // function must multiply the base by itself exp number of times
  if (exp == 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

/* 
Question 3: Calculate factorial
Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

Sample:
*/

function factorial(n) {
  //
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

/*
Question 4: Check all values in an array
Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

Sample:

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false
*/

/*
Question 5: Product of an array
Write a function called productOfArray which takes in an array of numbers and returns the product of them all

Sample:

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60
*/

let someArr = [1, 2, 3, 10];

function productOfArray(arr, total = 1) {
  if (arr.length == 1) return total;
  let newTotal = total * arr[arr.length - 1];
  let newArr = arr;
  newArr.pop();
  //   console.log(newTotal);
  return productOfArray(newArr, newTotal);
}

// function productOfArray(array) {
//   if (array.length === 0) return 1;

//   return array.shift() * productOfArray(array);
// }

let answer = productOfArray(someArr);
console.log(answer);
