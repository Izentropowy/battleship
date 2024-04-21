import { validateFreeSpace } from "../helpers/initializeShips";

const testboard = [];

for (let i = 0; i < 10; i++) {
  testboard[i] = [];
  for (let j = 0; j < 10; j++) {
    testboard[i][j] = null;
  }
}

testboard[1][1] = "something";
testboard[1][2] = "something";
testboard[1][3] = "something";

test("returns true if there is a free space", () => {
  let x = 0;
  let y = 0;
  let shipLength = 3;

  expect(validateFreeSpace(testboard, shipLength, x, y)).toBe(true);
});

test("returns false if there is not any free space", () => {
  let x = 1;
  let y = 2;
  let shipLength = 3;

  expect(validateFreeSpace(testboard, shipLength, x, y)).toBe(false);
});

test("returns false if out of boundary", () => {
  let x = 10;
  let y = 2;
  let shipLength = 3;

  expect(validateFreeSpace(testboard, shipLength, x, y)).toBe(false);
});
