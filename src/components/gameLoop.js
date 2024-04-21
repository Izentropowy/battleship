import Player from "../factories/player";
import Gameboard from "../factories/gameboard";
import Ship from "../factories/ship";
import initializeShips from "../helpers/initializeShips";

function displayShips(player, gameboard) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (gameboard.coordinates[i][j] instanceof Ship) {
        const field = document.querySelector(
          `.${player}-table .field${i}${[j]}`,
        );
        field.classList.add("ship");
      }
    }
  }
}

const gameLoop = () => {
  const player = new Player();
  const computer = new Player();

  initializeShips(player);
  displayShips("Player", player.gameboard);
};

export default gameLoop;
