import { King } from "./king.js";

describe("Given a King class", () => {
  describe("When we intantiate it", () => {
    test("it should have a object with the properties of the Class", () => {
      const king = new King("name", "family", "age", true, 4, "speech");

      expect(king).toHaveProperty("name", "name");
      expect(king).toHaveProperty("family", "family");
      expect(king).toHaveProperty("age", "age");
      expect(king).toHaveProperty("alive", true);
      expect(king).toHaveProperty("reign", 4);
      expect(king).toHaveProperty("speech", "Vais a morir todos");

    });
  });
});
