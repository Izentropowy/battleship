import { evaluateDirection, calculateMove } from "../helpers/smartAImove";

let testBoard = [];

for (let i = 0; i < 10; i++) {
  testBoard[i] = [];
  for (let j = 0; j < 10; j++) {
    testBoard[i][j] = null;
  }
}

test("it correctly evaluates horizontal", () => {
  testBoard[2][2] = "hit";
  testBoard[2][3] = "hit";

  expect(evaluateDirection(testBoard, 2, 2)).toBe("horizontal");
});

test("it correctly evaluates vertical", () => {
  testBoard[5][6] = "hit";
  testBoard[6][6] = "hit";

  expect(evaluateDirection(testBoard, 5, 6)).toBe("vertical");
});

test("it correctly evaluates unknown", () => {
  testBoard[7][7] = "hit";

  expect(evaluateDirection(testBoard, 7, 7)).toBe(false);
});

test("it randomly hits adjacent spot when direction unknown", () => {
  expect([
    [7, 6],
    [7, 8],
    [6, 7],
    [8, 7],
  ]).toContainEqual(calculateMove(testBoard, 7, 7));
});

test("it randomly hits horizontal spot when direction horizontal", () => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.9);
  expect([
    [2, 1],
    [2, 4],
  ]).toContainEqual(calculateMove(testBoard, 2, 2));
  jest.spyOn(global.Math, "random").mockRestore();
});

test("it randomly hits vertical spot when direction horizontal", () => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.9);
  expect([
    [4, 6],
    [7, 6],
  ]).toContainEqual(calculateMove(testBoard, 5, 6));
  jest.spyOn(global.Math, "random").mockRestore();
});

test("it randomly hits vertical spot when direction horizontal with long ship", () => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.1);

  testBoard[0][9] = "hit";
  testBoard[1][9] = "hit";
  testBoard[2][9] = "hit";

  expect([[3, 9]]).toContainEqual(calculateMove(testBoard, 0, 9));
  jest.spyOn(global.Math, "random").mockRestore();
});
