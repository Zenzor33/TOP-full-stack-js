let player1 = {
  name: "player1",
  selections: [],
};

let player2 = {
  name: "player2",
  selections: [],
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
    // which player selected the div?
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
      console.log("DRAW");
      gameboard.gameState = "draw";
    }
  };

  const playGame = (selection) => {
    updateAvailableSquares();
    const activePlayer = turnToAct();

    // if gamesquare is available -> continue
    if (isSquareAvailable(selection)) {
      // Determine which player's turn to act
      // Push selection to player's array
      if (activePlayer === "player1") {
        player1.selections.push(selection);
        drawSelection("player1", selection);
        updateAvailableSquares();
        checkWinner(activePlayer, player1.selections);
        checkDraw();
      } else if (activePlayer === "player2") {
        player2.selections.push(selection);
        drawSelection("player2", selection);
        updateAvailableSquares();
        checkWinner(activePlayer, player2.selections);
        checkDraw();
      } else {
        console.log("error determining active player");
      }
    } else {
      console.log("square unavailable. player must chose different square");
    }
  };

  return {
    availableSquares,
    updateAvailableSquares,
    playGame,
    gameState,
  };
})();

// Initiate program
const displayController = (() => {
  // Store the player selection in a variabe
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

  gamesquareDivs.forEach((div) =>
    div.addEventListener("click", displayController.setPlayerSelection)
  );
})();
