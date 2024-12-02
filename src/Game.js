const Dealer = require('../src/Dealer');
const Player = require('../src/Player');
const prompt = require('prompt-sync')({ sigint: true});

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

    start() {
      let p = "";
      while (p !== 'q') {
        console.log("Welcome to the black Jack Game");
        console.log("1 - Start the game");
        console.log("q - Exit");
        p = prompt("Enter your choice: ")
        if (p === '1') {
          console.log("Let's play Bebe");
        } else if (p === 'q') {

        } else {
          console.log('I did not understand the request');
        }
      }
    }

}
module.exports = Game;