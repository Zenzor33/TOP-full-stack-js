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

const gameboard = (() => {
  // Initializtion. Retreive the e.target.id
  const playerSelection = (e) => {
    const playerChoice = e.target.id;
    console.log(playerChoice);
  };
  return {
    playerSelection,
  };
})();

(function () {
  const gamesquareDivs = document.querySelectorAll(".gamesquare");

  gamesquareDivs.forEach((div) =>
    div.addEventListener("click", gameboard.playerSelection)
  );
})();
