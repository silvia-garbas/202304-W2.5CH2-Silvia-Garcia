import { Character } from "./character.js";

export class King extends Character {
  constructor(name, family, age, alive, yearsOfReign, speech) {
    super(name, family, age, alive);

    this.reign = yearsOfReign;
    this.speech = "Vais a morir todos";
  }
}
