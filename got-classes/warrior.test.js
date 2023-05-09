import { Warrior } from "./warrior.js";
describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const warrior = new Warrior(
        "Jaime",
        "Lannister",
        35,
        "alive",
        "sword",
        8,
        "Primero pego y luego pregunto"
      );

      expect(warrior).toHaveProperty("name", "Jaime");
      expect(warrior).toHaveProperty("family", "Lannister");
      expect(warrior).toHaveProperty("age", 35);
      expect(warrior).toHaveProperty("status", "alive");
      expect(warrior).toHaveProperty("weapon", "sword");
      expect(warrior).toHaveProperty("skill", 8);
      expect(warrior).toHaveProperty("speech", "Primero pego y luego pregunto");
    });
  });
});
