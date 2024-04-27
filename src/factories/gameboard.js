import { elements } from "../components/elements";
import Ship from "./ship";

class Gameboard {
  constructor() {
    this.coordinates = [];
    this.shots = [];
    this.#createArrays();
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
      this.coordinates[coordinates[0] + i][coordinates[1]] = ship;
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

  validateFreeSpace(board, length, x, y) {
    if (x + length > 10 || y + length > 10) return false; // Check if ship exceeds board boundaries

    for (let i = 0; i < length; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          const row = x + i + j;
          const col = y + k;

          if (row < 0 || row >= 10 || col < 0 || col >= 10) continue; // Skip if position is outside board boundaries

          if (board[row][col] !== null) return false; // Check if neighboring space is occupied
        }
      }
    }

    return true;
  }

  initializeShips() {
    const ships = [
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
      new Ship(2),
      new Ship(2),
      new Ship(1),
      new Ship(1),
      new Ship(1),
      new Ship(1),
    ];

    while (ships.length) {
      let ship = ships.shift();
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!this.validateFreeSpace(this.coordinates, ship.length, x, y));
      this.placeShip(ship, [x, y]);
    }
  }
}

export default Gameboard;
