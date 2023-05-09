import { Adviser } from "./adviser.js";

describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const adviser = new Adviser(
        "Tyrion",
        "Lannister",
        30,
        "alive",
        "Daenerys"
      );

      expect(adviser).toHaveProperty("name", "Tyrion");
      expect(adviser).toHaveProperty("family", "Lannister");
      expect(adviser).toHaveProperty("age", 30);
      expect(adviser).toHaveProperty("status", "alive");
      expect(adviser).toHaveProperty("characterToAdvise", "Daenerys");
    });
  });
});
