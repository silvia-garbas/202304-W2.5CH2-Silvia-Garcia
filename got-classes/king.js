import { Character } from "./character.js";

export class King extends Character {
  yearsOfReign;

  constructor(name, family, age, alive, yearsOfReign) {
    super(name, family, age, alive);
    this.reign = yearsOfReign;
  }
}
