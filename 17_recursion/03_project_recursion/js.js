/*
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
*/

let arr1 = [5, 2, 1, 3, 6, 4];

function splitTheArray(arr) {
  let splitArray = [];
  arr.forEach((ele) => splitArray.push([ele]));
  console.log(splitArray);
  return splitArray;
}

// converts two arrays into one sorted array
function mergeValues(arr1, arr2) {
  // Combine and sort the two arrays
  let mergedArr = arr1.concat(arr2);
  // Sort the two values
  let sortedArr = mergedArr.sort(function (a, b) {
    return a - b;
  });
  return sortedArr;
}

let tempArr = [];
function mergeSort(arr) {
  // split each element into its own individual array
  let splitArray = splitTheArray(arr);
  let counts = 0;
  // merge each element in groups of 2
  for (let i = splitArray.length - 1; i >= 0; i--) {
    counts++;
    if (counts === 2) {
      let mv = mergeValues(splitArray[i], splitArray[i + 1]);
      tempArr.push(mv);
      counts = 0;
    }
  }
}

let result = mergeSort(arr1);
console.log(tempArr);
// console.log(result);
