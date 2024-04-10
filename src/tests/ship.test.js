import Ship from "../ship";

let testShip;

beforeEach(() => {
  testShip = new Ship(4);
});

test("ship has a defined length, 0 hits and is not sunk when created", () => {
  expect(testShip.length).toBe(4);
  expect(testShip.hits).toBe(0);
  expect(testShip.isSunk).toBe(false);
});

test("ship have function hit that increases the number of hits", () => {
  testShip.hit();
  expect(testShip.hits).toBe(1);
});

test("ship is sunk when hit the same number of times as its length", () => {
  for (let i = 0; i < testShip.length; i++) {
    testShip.hit();
  }

  expect(testShip.isSunk).toBe(true);
});
