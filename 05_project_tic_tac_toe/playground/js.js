const Player = (name) => {
  const getName = () => name;
  const selections = [];
  return {
    getName,
    selections,
  };
};

let player1 = null;
let player2 = null;

const setPlayers = (p1name, p2name) => {
  player1 = Player(p1name);
  player2 = Player(p2name);
};

(function () {
  const btnStart = document.querySelector("#btnStart");

  btnStart.addEventListener("click", (e) => {
    // retrieve text form input forms -> store in variables
    e.preventDefault();
    const p1name = document.getElementById("p1name").value;
    const p2name = document.getElementById("p2name").value;
    setPlayers(p1name);
    setPlayers(p2name);
  });
})();

// build factory functions for players

// const Player = (name) => {
//   const getName = () => name;
//   const selections = [];
//   return {
//     getName,
//     selections,
//   };
// };

// const player1 = Player("rob");
