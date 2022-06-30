/*
Issues:
1) player1 & player2 are global variables. How best to fix this?
2) many functions have multiple responsibilities:
-- is gameboard.registerSelection an appropriate function?
-- is gameboard.playGame an appropriate function?
-- 
*/

let player1 = null;
let player2 = null;

const Player = (name, id) => {
  const selections = [];
  return { name, id, selections };
};

const gameboard = (() => {
  const squares = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let availableSquares = squares;
  let gameState = "active"; // active, draw, player1, player2

  const updateAvailableSquares = (playerObj) => {
    for (let i = 0; i < playerObj.selections.length; i++) {
      let selection = playerObj.selections[i];
      if (squares.includes(selection)) {
        let target = gameboard.availableSquares.indexOf(selection);
        gameboard.availableSquares.splice(target, 1);
      }
    }
  };

  const isSquareAvailable = (selection) =>
    gameboard.availableSquares.includes(selection) ? true : false;

  const turnToAct = () => {
    return player1.selections.length === player2.selections.length
      ? player1
      : player2;
  };

  const drawSelection = (playerObj, squareId) => {
    const targetSquare = document.getElementById(squareId);

    return playerObj.id === "player1"
      ? targetSquare.appendChild(document.createTextNode("X"))
      : targetSquare.appendChild(document.createTextNode("O"));
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

  const checkWinner = (playerObj) => {
    let count = 0;
    for (let i = 0; i < winningPermutations.length; i++) {
      if (count < 3) count = 0;
      for (let j = 0; j < winningPermutations[i].length; j++) {
        if (count < 3) {
          if (playerObj.selections.includes(winningPermutations[i][j])) {
            count++;
          }
          if (count === 3 && gameboard.gameState === "active") {
            gameboard.gameState = playerObj.id; // winner
          }
        }
      }
    }
  };

  const checkDraw = () => {
    if (availableSquares.length === 0 && gameboard.gameState === "active") {
      gameboard.gameState = "draw";
    }
  };

  const registerSelection = (playerObj, selection) => {
    playerObj.selections.push(selection);
    drawSelection(playerObj, selection);
    updateAvailableSquares(playerObj);
    checkWinner(playerObj);
    checkDraw();
  };

  const playGame = (selection) => {
    const activePlayer = turnToAct();

    if (isSquareAvailable(selection)) {
      if (activePlayer.id === "player1" || activePlayer.id === "player2") {
        registerSelection(activePlayer, selection);
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
        setHeaderText(); // changes header text to display outcome
      }
    }
  };

  function setHeaderText() {
    const element = document.createTextNode(`${gameboard.gameState} wins!`);
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
    player1 = Player(p1name, "player1");
    player2 = Player(p2name, "player2");

    const hiddenDivs = document.querySelectorAll(".hidden");
    hiddenDivs.forEach((div) => div.classList.remove("hidden"));
  });
})();
