import Ship from "../factories/ship";

function evaluateDirection(board, i, j) {
  if (j + 1 < 10 && board[i][j + 1] === "hit") {
    return "horizontal";
  }
  if (i + 1 < 10 && board[i + 1][j] === "hit") {
    return "vertical";
  }
  return false;
}

function calculateMove(board, i, j) {
  let selectedOption;
  do {
    if (!evaluateDirection(board, i, j)) {
      let options = [
        [i, j + 1],
        [i, j - 1],
        [i - 1, j],
        [i + 1, j],
      ];

      options = options.filter((option) => {
        // Check if both elements of the option array are within bounds
        return option.every((coord) => coord >= 0 && coord <= 9);
      });

      let random = Math.floor(Math.random() * options.length);

      selectedOption = options[random];
    }
    if (evaluateDirection(board, i, j) === "horizontal") {
      let k = 0;
      while (board[i][j + k] === "hit") {
        if (j + k + 1 > 9) break;
        k++;
      }
      let options = [
        [i, j - 1],
        [i, j + k],
      ];
      let random = Math.floor(Math.random() * 2);

      if (j === 0) random = 1;

      selectedOption = options[random];
    }
    if (evaluateDirection(board, i, j) === "vertical") {
      let k = 0;
      while (board[i + k][j] === "hit") {
        if (i + k + 1 > 9) break;
        k++;
      }
      let options = [
        [i - 1, j],
        [i + k, j],
      ];
      let random = Math.floor(Math.random() * 2);

      if (i === 0) random = 1;

      selectedOption = options[random];
    }
  } while (board[selectedOption[0]][selectedOption[1]]);
  return selectedOption;
}

function markAdjacent(gameboard, x, y) {
  if (gameboard.coordinates[x][y].isSunk) {
    let start = gameboard.coordinates[x][y].coordinates;
    let length = gameboard.coordinates[x][y].length;
    let end;
    if (gameboard.coordinates[x][y].direction === "horizontal") {
      end = [start[0], start[1] + length - 1];
    } else {
      end = [start[0] + length - 1, start[1]];
    }

    for (let i = start[0] - 1; i <= end[0] + 1; i++) {
      for (let j = start[1] - 1; j <= end[1] + 1; j++) {
        if (i >= 0 && i < 10 && j >= 0 && j < 10) {
          if (gameboard.shots[i][j] === null) {
            gameboard.shots[i][j] = "adjacent";
          }
        }
      }
    }
  }
}

export { evaluateDirection, calculateMove, markAdjacent };
