import { Character } from "./character.js";
describe("Given a Character class", () => {
  describe("When we intantiate it", () => {
    test("it should have a object with the properties of the Class", () => {
      const character = new Character("name", "family", "age", "status", "GOT");
      expect(character).toHaveProperty("name", "name");
      expect(character).toHaveProperty("family", "family");
      expect(character).toHaveProperty("age", "age");
      expect(character).toHaveProperty("status", "status");
      expect(character).toHaveProperty("tvShow", "GOT");
    });
  });
});
