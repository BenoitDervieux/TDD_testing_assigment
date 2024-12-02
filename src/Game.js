const Dealer = require('../src/Dealer');
const Player = require('../src/Player');

class Game {
  #dealer;
  _players = [];
    constructor() {
      this.#dealer = new Dealer();
    }

    getDealer() {
      return this.#dealer;
    }
    createPlayer(number) {
      for (let i = 0; i < number; i++) {
        this._players.push(new Player());
      }
    }

    
}

  module.exports = Game;