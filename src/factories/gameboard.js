// jest.mock("../components/elements", () => jest.fn());
import Ship from "./ship";
import { elements } from "../components/elements";

class Gameboard {
  constructor(isPlayer) {
    this.coordinates = [];
    this.shots = [];
    this.#createArrays();
    this.isPlayer = isPlayer;
  }

  #createArrays() {
    for (let i = 0; i < 10; i++) {
      this.coordinates[i] = [];
      this.shots[i] = [];
      for (let j = 0; j < 10; j++) {
        this.coordinates[i][j] = null;
        this.shots[i][j] = null;
      }
    }
  }

  placeShip(ship, coordinates) {
    for (let i = 0; i < ship.length; i++) {
      if (ship.direction === "horizontal") {
        this.coordinates[coordinates[0]][coordinates[1] + i] = ship;
      } else {
        this.coordinates[coordinates[0] + i][coordinates[1]] = ship;
      }
    }
  }

  receiveAttack(coordinates) {
    this.coordinates[coordinates[0]][coordinates[1]] === null
      ? (this.shots[coordinates[0]][coordinates[1]] = "miss")
      : (this.coordinates[coordinates[0]][coordinates[1]].hit(),
        (this.shots[coordinates[0]][coordinates[1]] = "hit"));
  }

  checkIfAllSunk() {
    let checker = this.coordinates.map((row) => {
      return row.map((column) => {
        return column !== null ? true : false;
      });
    });
    let checker2 = this.shots.map((row) => {
      return row.map((column) => {
        return column === "hit" ? true : false;
      });
    });
    return JSON.stringify(checker) === JSON.stringify(checker2);
  }

  validateFreeSpace(board, length, direction, x, y) {
    if (x + length > 10 || y + length > 10) return false; // Check if ship exceeds board boundaries

    for (let i = 0; i < length; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          let row;
          let col;
          if (direction === "horizontal") {
            row = x + k;
            col = y + i + j;
          } else {
            row = x + i + j;
            col = y + k;
          }

          if (row < 0 || row >= 10 || col < 0 || col >= 10) continue; // Skip if position is outside board boundaries

          if (board[row][col] !== null) return false; // Check if neighboring space is occupied
        }
      }
    }

    return true;
  }

  initializeShips() {
    const ships = [
      new Ship(4, this),
      new Ship(3, this),
      new Ship(3, this),
      new Ship(2, this),
      new Ship(2, this),
      new Ship(2, this),
      new Ship(1, this),
      new Ship(1, this),
      new Ship(1, this),
      new Ship(1, this),
    ];

    while (ships.length) {
      let ship = ships.shift();
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        ship.direction = x % 2 === 0 ? "vertical" : "horizontal";
      } while (
        !this.validateFreeSpace(
          this.coordinates,
          ship.length,
          ship.direction,
          x,
          y,
        )
      );
      this.placeShip(ship, [x, y]);
      ship.coordinates = [x, y];
    }
  }

  getField(x, y) {
    let fields = this.isPlayer
      ? elements.player1Fields
      : elements.player2Fields;
    for (let field of fields.childNodes) {
      if (field.dataset.x == x && field.dataset.y == y) {
        return field;
      }
    }
  }
}

export default Gameboard;
