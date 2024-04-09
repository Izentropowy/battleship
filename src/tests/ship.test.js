import Ship from "../ship";

test("ship has a defined length", () => {
  const testShip = new Ship(4);
  expect(testShip.length).toBe(4);
});
