class Ship {
  constructor(length, gameboard, coordinates, direction) {
    this.length = length;
    this.gameboard = gameboard;
    this.coordinates = coordinates;
    this.direction = direction;
    this.hits = 0;
    this.isSunk = false;
  }

  hit() {
    this.hits++;
    this.#checkStatus();
  }

  #checkStatus() {
    if (this.hits === this.length) {
      this.isSunk = true;
    }
  }
}

export default Ship;
