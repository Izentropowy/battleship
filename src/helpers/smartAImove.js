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

export { evaluateDirection, calculateMove };
