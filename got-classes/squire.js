import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, family, age, status, playBalls) {
    super(name, family, age, status);
    this.characterToServe = "warrior";
    this.playBalls = playBalls;
    this.speech = "Soy un loser";
  }
}
