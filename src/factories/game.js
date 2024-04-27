import Player from "./player";
import Ship from "./ship";
import { elements } from "../components/elements";

class Game {
  constructor() {
    this.player1 = new Player("RandomName", true);
    this.player2 = new Player("Computer", false);
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
      }
    }
  }

  addFieldListeners() {
    elements.player2Fields.addEventListener("click", this.makeMove);
    elements.player2Fields.addEventListener("click", this.makeAIMove);
  }

  makeMove = (e) => {
    const field = e.target;
    if (e.target.classList.contains("board-field")) {
      const x = field.dataset.x;
      const y = field.dataset.y;
      if (this.player2.gameboard.coordinates[x][y] instanceof Ship) {
        const xIcon = document.createElement("i");
        xIcon.classList.add("fa-solid", "fa-x");
        field.appendChild(xIcon);
      } else {
        const xIcon = document.createElement("i");
        xIcon.classList.add("fa-solid", "fa-circle-dot");
        field.appendChild(xIcon);
      }
      field.disabled = true;
      this.player1.makeMove([x, y], this.player2.gameboard);
    }
  };

  makeAIMove = () => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.player1.gameboard.shots[x][y] !== null);
    for (let field of elements.player1Fields.childNodes) {
      if (field.dataset.x == x && field.dataset.y == y) {
        if (this.player1.gameboard.coordinates[x][y] instanceof Ship) {
          const xIcon = document.createElement("i");
          xIcon.classList.add("fa-solid", "fa-x");
          field.appendChild(xIcon);
        } else {
          const xIcon = document.createElement("i");
          xIcon.classList.add("fa-solid", "fa-circle-dot");
          field.appendChild(xIcon);
        }
        this.player2.makeMove([x, y], this.player1.gameboard);
      }
    }
  };

  startGame() {
    this.player1.gameboard.initializeShips();
    this.player2.gameboard.initializeShips();
    this.renderShips();
    this.addFieldListeners();
  }
}

export default Game;
