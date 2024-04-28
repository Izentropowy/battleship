import Gameboard from "../factories/gameboard";

class Player {
  constructor(name, isPlayer) {
    this.name = name;
    this.isPlayer = isPlayer;
    this.gameboard = new Gameboard(isPlayer);
  }

  makeMove(coordinates, enemyBoard) {
    enemyBoard.receiveAttack(coordinates);
  }
}

export default Player;
