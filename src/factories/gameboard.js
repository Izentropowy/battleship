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
}

export default Gameboard;
