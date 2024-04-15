import Player from "../factories/player";

test("player can make a move", () => {
  let testPlayer = new Player("ja");
  let testBoard = {
    shots: [
      [null, null],
      [null, null],
      [null, null],
      [null, null],
    ],
    receiveAttack: jest.fn((coordinates) => {
      testBoard.shots[coordinates[0]][coordinates[1]] = "miss";
    }),
  };
  let testCoordinates = [1, 1];

  testPlayer.makeMove(testCoordinates, testBoard);

  expect(testBoard.shots[1][1]).toBe("miss");
});
