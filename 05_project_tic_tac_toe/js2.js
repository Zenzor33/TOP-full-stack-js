/*
displayController module:
- controls display on the screen
*/

/*
gameboard module:
- controls flow of the game
- 
*/

// player's factory function

let player1 = {
  name: "player1",
  selections: ["1", "3"],
};

let player2 = {
  name: "player2",
  selections: ["4", "4"],
};

const gameboard = (() => {
  // Initializtion. Retreive the e.target.id
  const playerSelection = (e) => {
    return e.target.id;
  };

  // Create object to store available square ID's
  const squares = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let availableSquares = squares;
  let unavailableSquares = [];

  const updateAvailableSquares = () => {
    for (let i = 0; i < player1.selections.length; i++) {
      let selection = player1.selections[i];
      if (
        squares.includes(selection) &&
        !unavailableSquares.includes(selection)
      ) {
        unavailableSquares.push(selection);
        let target = gameboard.availableSquares.indexOf(selection);
        gameboard.availableSquares.splice(target, 1);
      }
    }
    for (let i = 0; i < player2.selections.length; i++) {
      let selection = player2.selections[i];
      if (
        squares.includes(selection) &&
        !unavailableSquares.includes(selection)
      ) {
        unavailableSquares.push(selection);
        let target = gameboard.availableSquares.indexOf(selection);
        gameboard.availableSquares.splice(target, 1);
      }
    }
  };

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

  return {
    playerSelection,
    updateAvailableSquares,
    availableSquares,
    turnToAct,
    drawSelection,
  };
})();

const displayController = (() => {
  const test = () => gameboard.playerSelection;
  return {
    test,
  };
})();

(function () {
  const gamesquareDivs = document.querySelectorAll(".gamesquare");

  gamesquareDivs.forEach((div) =>
    div.addEventListener("click", gameboard.playerSelection)
  );
})();
