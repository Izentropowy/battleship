import Ship from "../factories/ship";

function validateFreeSpace(board, length, x, y) {
  if (x + length > 9 || y + length > 9) return false;
  for (let i = 0; i < length; i++) {
    if (board[x][y + i] !== null) return false;
  }
  return true;
}

function initializeShips(player) {
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
    } while (
      !validateFreeSpace(player.gameboard.coordinates, ship.length, x, y)
    );
    player.gameboard.placeShip(ship, [x, y]);
  }
}

export { validateFreeSpace };
export default initializeShips;
