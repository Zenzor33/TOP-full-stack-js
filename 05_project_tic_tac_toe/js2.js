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
  selections: ["4"],
};

const gameboard = (() => {
  // Initializtion. Retreive the e.target.id
  const playerSelection = (e) => {
    const playerChoice = e.target.id;
    console.log(playerChoice);
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

  return {
    playerSelection,
    updateAvailableSquares,
    availableSquares,
  };
})();

(function () {
  const gamesquareDivs = document.querySelectorAll(".gamesquare");

  gamesquareDivs.forEach((div) =>
    div.addEventListener("click", gameboard.playerSelection)
  );
})();
