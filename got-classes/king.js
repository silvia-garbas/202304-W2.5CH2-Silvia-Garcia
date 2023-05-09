import { Character } from "./character.js";

export class King extends Character {
  constructor(name, family, age, status, yearsOfReign, speech) {
    super(name, family, age, status);

    this.reign = yearsOfReign;
  }
}
