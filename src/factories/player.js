import Gameboard from "../factories/gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  makeMove(coordinates, enemyBoard) {
    enemyBoard.receiveAttack(coordinates);
  }
}

export default Player;
