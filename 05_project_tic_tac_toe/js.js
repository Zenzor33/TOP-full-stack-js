/*

Algorithm:

Notes:
- For version 1, ignore the requirement for no global variables. Just figure out the logic to get the program to work (with objects).

Steps:
- Write code to determine which player's turn is to act.
- Write code to determine which squares are available to play
- Write code to determine which squares each player's have played

- Each player's actions should be stored in an object. The player's object needs properties for:
1) Which squares the player has played

- The logic for the gameboard should be stored in a separate object. The gameboard object needs properties for:
1) Which player's turn it is to act
2) The squares each player has played
3) Determine if either player has won.
3a) optional?: if the game is a draw, before all squares are played
*/

const btnPlayer1 = document.querySelector("#player1");
const btnPlayer2 = document.querySelector("#player1");
const gamesquareDivs = document.querySelectorAll(".gamesquare");

gamesquareDivs.forEach((div) => div.addEventListener("click", playGame));

// Determine which player's turn it is to act.
// Player 1 starts the game with X's
function playGame(e) {
  const playerChoice = e.target.id;

  // check if playerChoice is already played
  // Search p1 and p2 array

  const isEven = (x) => x % 2 === 0;
  const p1SelectionsLength = player1.selections.length;
  const p2SelectionsLength = player2.selections.length;
  // which player selected the div?
  if (
    (isEven(p1SelectionsLength) && isEven(p2SelectionsLength)) ||
    (!isEven(p1SelectionsLength) && !isEven(p2SelectionsLength))
  ) {
    player1.selections.push(playerChoice);
    drawSelection("player1", playerChoice);
  } else {
    player2.selections.push(playerChoice);
    drawSelection("player2", playerChoice);
    console.log("player2: " + player2.selections);
  }
}

let player1 = {
  name: "player1",
  selections: [],
};

let player2 = {
  name: "player2",
  selections: [],
};

function drawSelection(player, squareId) {
  const targetSquare = document.getElementById(squareId);
  const textNodeX = document.createTextNode("X");
  const textNodeCircle = document.createTextNode("O");
  if (player === "player1") {
    targetSquare.appendChild(textNodeX);
  } else if (player === "player2") {
    targetSquare.appendChild(textNodeCircle);
  }
}

/*

const displayController =  ( () => {

    const btnPlayer1 = document.querySelector("#player1");
    const btnPlayer2 = document.querySelector("#player1");
    const gamesquareDivs = document.querySelectorAll(".gamesquare");

    gamesquareDivs.forEach((div) => div.addEventListener("click", playGame));

})();

gameboard = {
    function isAvailable: returns if square is available for selection.
    function checkGameStatus: returns if game is active or concluded
    function gameOutcome: if gameStatus is concluded, return winner

    let playerSelections = {
        player1: []
        player2: 
    }
}

player = {
    function makeSelection(player, squareId): updates gameboard
}

*/
