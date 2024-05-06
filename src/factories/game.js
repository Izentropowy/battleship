import Player from "./player";
import Ship from "./ship";
import { elements } from "../components/elements";
import { calculateMove, markAdjacent } from "../helpers/smartAImove";

class Game {
  constructor() {
    this.player1 = new Player("RandomName", true);
    this.player2 = new Player("Computer", false);
    this.lastAIshot = null;
  }

  renderShips() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.player1.gameboard.coordinates[i][j] instanceof Ship) {
          const field = document.querySelector(
            `[data-x="${i}"][data-y="${j}"]`,
          );
          field.classList.add("ship");
        }
        // if (this.player2.gameboard.coordinates[i][j] instanceof Ship) {
        //   const field = document.querySelector(
        //     `.player2 [data-x="${i}"][data-y="${j}"]`,
        //   );
        //   field.classList.add("ship");
        // }
      }
    }
  }

  renderSunk(ship) {
    const start = ship.coordinates;
    const length = ship.length;
    for (let i = 0; i < length; i++)
      if (ship.direction === "horizontal") {
        ship.gameboard.getField(start[0], start[1] + i).classList.add("sunk");
      } else {
        ship.gameboard.getField(start[0] + i, start[1]).classList.add("sunk");
      }
  }

  renderMove(field, gameboard) {
    const x = field.dataset.x;
    const y = field.dataset.y;

    if (gameboard.coordinates[x][y] instanceof Ship) {
      if (gameboard.coordinates[x][y].isSunk) {
        this.renderSunk(gameboard.coordinates[x][y]);
      }
      const xIcon = document.createElement("i");
      xIcon.classList.add("fa-solid", "fa-x");
      field.appendChild(xIcon);
    } else {
      const xIcon = document.createElement("i");
      xIcon.classList.add("fa-solid", "fa-circle-dot");
      field.appendChild(xIcon);
    }
  }

  checkIfEnd(gameboard) {
    if (gameboard.checkIfAllSunk()) {
      elements.player1Fields.querySelectorAll("*").forEach((child) => {
        child.disabled = true;
      });
      elements.player2Fields.querySelectorAll("*").forEach((child) => {
        child.disabled = true;
      });
      this.renderWinner(!gameboard.isPlayer);
    }
  }

  renderWinner(player) {
    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-trophy");

    if (player) {
      elements.player1TableHeader.appendChild(xIcon);
    } else {
      elements.player2TableHeader.appendChild(xIcon);
    }
  }

  makeMove = (e) => {
    const field = e.target;
    if (e.target.classList.contains("board-field")) {
      const x = field.dataset.x;
      const y = field.dataset.y;

      field.disabled = true;
      this.player1.makeMove([x, y], this.player2.gameboard);
      this.renderMove(field, this.player2.gameboard);
      this.checkIfEnd(this.player2.gameboard);
      this.makeAIMove();
    }
  };

  makeAIMove = () => {
    let x, y;
    let moveFound = false;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.player1.gameboard.shots[i][j] === "hit") {
          if (!this.player1.gameboard.coordinates[i][j].isSunk) {
            let move = calculateMove(this.player1.gameboard.shots, i, j);
            x = move[0];
            y = move[1];
            moveFound = true;
            break; // exit the inner loop
          }
        }
      }
      if (moveFound) {
        break; // exit the outer loop
      }
    }

    if (x === undefined) {
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (this.player1.gameboard.shots[x][y] !== null);
    }

    this.player2.makeMove([x, y], this.player1.gameboard);
    let field = this.player1.gameboard.getField(x, y);
    this.renderMove(field, this.player1.gameboard);
    this.checkIfEnd(this.player1.gameboard);
    if (this.player1.gameboard.coordinates[x][y] instanceof Ship) {
      markAdjacent(this.player1.gameboard, x, y);
    }

    return [x, y];
  };

  addFieldListeners() {
    elements.player2Fields.addEventListener("click", this.makeMove);
  }

  startGame() {
    this.player1.gameboard.initializeShips();
    this.player2.gameboard.initializeShips();
    this.renderShips();
    this.addFieldListeners();
  }
}

export default Game;
