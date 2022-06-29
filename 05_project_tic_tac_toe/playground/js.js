// build factory functions for players

const Player = (name) => {
  const getName = () => name;
  const selections = [];
  return {
    getName,
    selections,
  };
};

const player1 = Player("rob");

// let arr1 = ["2", "3", "8", "5"];
// let arr2 = ["1", "6", "5"];

// const winningPermutations = [
//   ["1", "2", "3"],
//   ["4", "5", "6"],
//   ["7", "8", "9"],
//   ["1", "5", "9"],
//   ["3", "5", "7"],
//   ["1", "4", "7"],
//   ["2", "5", "8"],
//   ["3", "6", "9"],
// ];

// function checkWinner(playerArr) {
//   let count = 0;
//   for (let i = 0; i < winningPermutations.length; i++) {
//     console.log(`${i}: ${winningPermutations[i]}`);
//     if (count < 3) {
//       count = 0;
//     }
//     for (let j = 0; j < winningPermutations[i].length; j++) {
//       if (count < 3) {
//         if (playerArr.includes(winningPermutations[i][j])) {
//           count++;
//           console.log(count);
//         }
//         if (count === 3) {
//           console.log("WINNER");
//         }
//       }
//     }
//   }
// }

// checkWinner(arr1);
