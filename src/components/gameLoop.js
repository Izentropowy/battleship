import Player from "../factories/player";
import Gameboard from "../factories/gameboard";
import Ship from "../factories/ship";

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

  const battleship = new Ship(4);
  const cruiser1 = new Ship(3);
  const cruiser2 = new Ship(3);
  const submarine1 = new Ship(2);
  const submarine2 = new Ship(2);
  const submarine3 = new Ship(2);
  const destroyer1 = new Ship(1);
  const destroyer2 = new Ship(1);
  const destroyer3 = new Ship(1);
  const destroyer4 = new Ship(1);

  player.gameboard.placeShip(battleship, [0, 1]);
  player.gameboard.placeShip(submarine1, [5, 4]);
  displayShips("Player", player.gameboard);

  const fields = document.querySelectorAll(".board-field");
  fields.forEach((field) => {
    field.addEventListener("click", () => {
      console.log(field.classList[1]);
    });
  });
};

export default gameLoop;
