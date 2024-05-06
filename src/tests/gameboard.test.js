import Gameboard from "../factories/gameboard";
import Ship from "../factories/ship";

let testGameboard;

beforeEach(() => {
  testGameboard = new Gameboard();
});

test("gameboard has coordinates that are an array", () => {
  expect(Array.isArray(testGameboard.coordinates)).toBe(true);
});

test("coordinates are set to null by default", () => {
  expect(testGameboard.coordinates[3][4]).toBe(null);
  expect(testGameboard.coordinates[0][0]).toBe(null);
});

test("places ships in correct coordinates", () => {
  let testCoordinates = [1, 2];
  let testShip = new Ship(2);

  let testCoordinates2 = [4, 4];
  let testShip2 = new Ship(4);

  testGameboard.placeShip(testShip, testCoordinates);
  testGameboard.placeShip(testShip2, testCoordinates2);

  expect(testGameboard.coordinates[1][2]).toBeInstanceOf(Object);
  expect(testGameboard.coordinates[2][2]).toBeInstanceOf(Object);

  expect(testGameboard.coordinates[4][4]).toBeInstanceOf(Object);
  expect(testGameboard.coordinates[5][4]).toBeInstanceOf(Object);
  expect(testGameboard.coordinates[6][4]).toBeInstanceOf(Object);
  expect(testGameboard.coordinates[7][4]).toBeInstanceOf(Object);
});

test("board can receive a missed attack", () => {
  let testCoordinates = [1, 2];
  let testCoordinates2 = [7, 0];

  testGameboard.receiveAttack(testCoordinates);
  testGameboard.receiveAttack(testCoordinates2);

  expect(testGameboard.shots[1][2]).toBe("miss");
  expect(testGameboard.shots[7][0]).toBe("miss");
});

test("ship can be hit", () => {
  let testCoordinates = [1, 2];
  let testShip = new Ship(2);
  testGameboard.placeShip(testShip, testCoordinates);

  testGameboard.receiveAttack(testCoordinates);

  expect(testGameboard.coordinates[1][2]).toBeInstanceOf(Object);
  expect(testShip.hits).toBe(1);
});

test("report if all sunk", () => {
  let testCoordinates = [1, 2];
  let testShip = new Ship(4);
  testGameboard.placeShip(testShip, testCoordinates);

  expect(testGameboard.checkIfAllSunk()).toBe(false);

  testGameboard.receiveAttack([0, 0]);
  testGameboard.receiveAttack([1, 2]);
  testGameboard.receiveAttack([2, 2]);
  testGameboard.receiveAttack([3, 2]);
  testGameboard.receiveAttack([4, 2]);

  expect(testGameboard.checkIfAllSunk()).toBe(true);
});

describe("space validating", () => {
  jest.mock("../components/elements");
  let testGameboard = new Gameboard();

  testGameboard.coordinates[1][1] = "something";
  testGameboard.coordinates[1][2] = "something";
  testGameboard.coordinates[1][3] = "something";

  test("returns true if there is a free space", () => {
    let x = 5;
    let y = 5;
    let shipLength = 3;

    expect(
      testGameboard.validateFreeSpace(
        testGameboard.coordinates,
        shipLength,
        "horizontal",
        x,
        y,
      ),
    ).toBe(true);
  });

  test("returns false if there is not any free space", () => {
    let x = 1;
    let y = 2;
    let shipLength = 3;

    expect(
      testGameboard.validateFreeSpace(
        testGameboard.coordinates,
        shipLength,
        "horizontal",
        x,
        y,
      ),
    ).toBe(false);
  });

  test("returns false if out of boundary", () => {
    let x = 10;
    let y = 2;
    let shipLength = 3;

    expect(
      testGameboard.validateFreeSpace(
        testGameboard.coordinates,
        shipLength,
        "horizontal",
        x,
        y,
      ),
    ).toBe(false);
  });

  test("returns false if adjacent to ship", () => {
    let x = 0;
    let y = 1;
    let shipLength = 3;

    expect(
      testGameboard.validateFreeSpace(
        testGameboard.coordinates,
        shipLength,
        "horizontal",
        x,
        y,
      ),
    ).toBe(false);
  });
});
