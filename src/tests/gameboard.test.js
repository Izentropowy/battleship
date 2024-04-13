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
