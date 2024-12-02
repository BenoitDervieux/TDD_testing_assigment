const Dealer = require('../src/Dealer');

class Game {
  #dealer;
    constructor() {
      this.#dealer = new Dealer();
    }

    getDealer() {
      return this.#dealer;
    }
}

  module.exports = Game;