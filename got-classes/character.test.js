import { Character } from "./character.js";
describe("Given a Character class", () => {
  describe("When we intantiate it", () => {
    test("it should have a object with the properties of the Class", () => {
      const character = new Character("Silvia", "family", "age", alive, "Game of Thrones");
      expect(character).toHaveProperty("name", "Silvia");
      expect(character).toHaveProperty("family", "family");
      expect(character).toHaveProperty("age", "age");
      expect(character).toHaveProperty("status", alive);
      expect(character).toHaveProperty("tvShow", "Game of Thrones");
    });
  });
});
