/*
Issues:
- player1 & player2 are global variables. I don't know how to fix this.
- gameboard.registerSelection can be reduced to two arguments. I can rewrite the functions to accept the player object instead of the string
*/

let player1 = null;
let player2 = null;

const Player = (name) => {
  const selections = [];
  return { name, selections };
};

const gameboard = (() => {
  const squares = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let availableSquares = squares;
  let gameState = "active"; // active, draw, player1, player2

  const updateAvailableSquares = () => {
    for (let i = 0; i < player1.selections.length; i++) {
      let selection = player1.selections[i];
      if (squares.includes(selection)) {
        let target = gameboard.availableSquares.indexOf(selection);
        gameboard.availableSquares.splice(target, 1);
      }
    }
    for (let i = 0; i < player2.selections.length; i++) {
      let selection = player2.selections[i];
      if (squares.includes(selection)) {
        let target = gameboard.availableSquares.indexOf(selection);
        gameboard.availableSquares.splice(target, 1);
      }
    }
  };

  const isSquareAvailable = (selection) =>
    gameboard.availableSquares.includes(selection) ? true : false;

  const turnToAct = () => {
    const isEven = (x) => x % 2 === 0;
    const p1SelectionsLength = player1.selections.length;
    const p2SelectionsLength = player2.selections.length;

    if (
      (isEven(p1SelectionsLength) && isEven(p2SelectionsLength)) ||
      (!isEven(p1SelectionsLength) && !isEven(p2SelectionsLength))
    ) {
      return "player1";
    } else {
      return "player2";
    }
  };

  const drawSelection = (player, squareId) => {
    const targetSquare = document.getElementById(squareId);
    const textNodeX = document.createTextNode("X");
    const textNodeCircle = document.createTextNode("O");
    if (player === "player1") {
      targetSquare.appendChild(textNodeX);
    } else if (player === "player2") {
      targetSquare.appendChild(textNodeCircle);
    }
  };

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

  const checkWinner = (currentPlayer, playerSelectionArr) => {
    let count = 0;
    for (let i = 0; i < winningPermutations.length; i++) {
      if (count < 3) {
        count = 0;
      }
      for (let j = 0; j < winningPermutations[i].length; j++) {
        if (count < 3) {
          if (playerSelectionArr.includes(winningPermutations[i][j])) {
            count++;
          }
          if (count === 3 && gameboard.gameState === "active") {
            console.log("WINNER"); // change to return here
            gameboard.gameState = currentPlayer;
          }
        }
      }
    }
  };

  const checkDraw = () => {
    if (availableSquares.length === 0 && gameboard.gameState === "active") {
      //   console.log("DRAW");
      gameboard.gameState = "draw";
    }
  };

  const registerSelection = (playerStr, playerObj, selection) => {
    playerObj.selections.push(selection);
    drawSelection(playerStr, selection);
    updateAvailableSquares();
    checkWinner(playerStr, playerObj.selections);
    checkDraw();
  };

  const playGame = (selection) => {
    // updateAvailableSquares(); <-- Probably unnecessary?
    const activePlayer = turnToAct();
    actPlayer = activePlayer === "player1" ? player1 : player2; // converts string to object

    if (isSquareAvailable(selection)) {
      if (activePlayer === "player1" || activePlayer === "player2") {
        registerSelection(activePlayer, actPlayer, selection);
      } else {
        console.log("error determining active player");
      }
    } else {
      //   console.log("square unavailable. player must chose different square");
    }
  };

  return {
    availableSquares,
    updateAvailableSquares,
    playGame,
    gameState,
  };
})();

const displayController = (() => {
  let playerSelection = null;

  const setPlayerSelection = (e) => {
    if (gameboard.gameState === "active") {
      displayController.playerSelection = e.target.id;
      gameboard.playGame(displayController.playerSelection);
      if (gameboard.gameState !== "active") {
        setHeaderText();
      }
    }
  };

  function setHeaderText() {
    const element = document.createTextNode(gameboard.gameState);
    const parent = document.querySelector(".gameState");
    const elementToReplace = document.querySelector("#gameStateText");
    elementToReplace.remove();
    parent.appendChild(element);
  }

  return {
    setPlayerSelection, // necessary for eventListern callback
  };
})();

(function () {
  const gamesquareDivs = document.querySelectorAll(".gamesquare");
  const btnReset = document.querySelector("#reset");
  const btnStart = document.querySelector("#btnStart");

  gamesquareDivs.forEach((div) =>
    div.addEventListener("click", displayController.setPlayerSelection)
  );

  btnStart.addEventListener("click", (e) => {
    // retrieve text form input forms -> store in variables
    e.preventDefault();
    const p1name = document.getElementById("p1name").value;
    const p2name = document.getElementById("p2name").value;
    player1 = Player(p1name);
    player2 = Player(p2name);
  });
})();
