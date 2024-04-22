import Player from "../factories/player";
import Ship from "../factories/ship";
import initializeShips from "../helpers/initializeShips";

function displayShips(player) {
  const reference = player.isPlayer ? "player1" : "player2";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (player.gameboard.coordinates[i][j] instanceof Ship) {
        const field = document.querySelector(`.${reference} .field${i}${[j]}`);
        field.classList.add("ship");
      }
    }
  }
}

const gameSetup = () => {
  const player = new Player("Me", true);
  const computer = new Player("Bot", false);

  initializeShips(player);
  initializeShips(computer);
  displayShips(player);
  displayShips(computer);

  return [player, computer];
};

export default gameSetup;
