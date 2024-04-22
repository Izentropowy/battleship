import Gameboard from "../factories/gameboard";

class Player {
  constructor(name, isPlayer) {
    this.name = name;
    this.isPlayer = isPlayer;
    this.gameboard = new Gameboard();
  }

  makeMove(coordinates, enemyBoard) {
    enemyBoard.receiveAttack(coordinates);
  }
}

export default Player;
