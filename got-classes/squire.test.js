import { Squire } from "./squire.js";

describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const squire = new Squire("Bron", "Perez", 35, "alive", 8);

      expect(squire).toHaveProperty("name", "Bron");
      expect(squire).toHaveProperty("family", "Perez");
      expect(squire).toHaveProperty("age", 35);
      expect(squire).toHaveProperty("status", "alive");
      expect(squire).toHaveProperty("playBalls", 8);
    });
  });
});
