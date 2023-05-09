import { King } from "./king.js";

describe("Given King class", () => {
  describe("When we instantiate it", () => {
    test("Then should have an object with the properties of the class", () => {
      const king = new King("Joffrey", "Baratheon", "40", "alive", 6);
      expect(king).toHaveProperty("name", "Joffrey");
      expect(king).toHaveProperty("family", "Baratheon");
      expect(king).toHaveProperty("age", "40");
      expect(king).toHaveProperty("status", "alive");
      expect(king).toHaveProperty("yearsOfReign", 6);
    });
  });
});
