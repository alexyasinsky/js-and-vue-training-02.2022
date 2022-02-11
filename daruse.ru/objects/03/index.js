'use strict';

class Ladder  {
  constructor() {
    this.position = 0;
  }

  showStep() {
    console.log(this.position);
  }

  up() {
    this.position += 1;
  }

  down() {
    this.position -= 1;
  }
}

const ladder = new Ladder;

ladder.showStep();
ladder.up();
ladder.up();
ladder.showStep();
ladder.down();
ladder.showStep();