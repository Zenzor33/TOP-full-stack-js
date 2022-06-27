let arr1 = ["2", "3", "8", "5"];
let arr2 = ["1", "6", "5"];

const winningPermutations = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
];

let count = 0;
for (let i = 0; i < winningPermutations.length; i++) {
  console.log(`${i}: ${winningPermutations[i]}`);
  if (count < 3) {
    count = 0;
  }
  for (let j = 0; j < winningPermutations[i].length; j++) {
    if (count < 3) {
      if (arr1.includes(winningPermutations[i][j])) {
        count++;
        console.log(count);
      }
      if (count === 3) {
        console.log("WINNER");
      }
    }
  }
}

// const containsAll = winner1.every((element) => {
//   return arr1.includes(element);
// });

// console.log(containsAll);

// if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
//   console.log("winner");
// }

/*
  Logic to check for game winner and draws

  game winner:
  if square permutations:
  - sideways: 123, 456, 789
  - diagnal: 159, 357
  - vertical: 147, 258, 369
  */
