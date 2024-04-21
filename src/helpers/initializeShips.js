import Ship from "../factories/ship";

function validateFreeSpace(board, length, x, y) {
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
