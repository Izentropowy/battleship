const gameLoop = (player1, player2) => {
  const player1fields = document.querySelectorAll(".player1 .board-field");
  const player2fields = document.querySelectorAll(".player2 .board-field");

  player2fields.forEach((field) => {
    field.addEventListener("click", () => {
      let x = field.className.slice(-2, -1);
      let y = field.className.slice(-1);
      let clickedfield = [x, y];

      player1.makeMove(clickedfield, player2.gameboard);
      console.log(player2.gameboard.shots);
    });
  });
};

export default gameLoop;
