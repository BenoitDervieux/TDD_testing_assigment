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
      if (number < 1 || number > 6) {
        throw new Error('Invalid number of players')
      }
      for (let i = 0; i < number; i++) {
        this._players.push(new Player());
      }
    }

    start(test = 0) {
      let p = "";
      if (test !== 0) {
        p = test;
      }
      while (p !== 'q') {
        console.log("Welcome to the black Jack Game");
        console.log("1 - Start the game");
        console.log("q - Exit");
        if ( p === "") {
          p = prompt("Enter your choice: ")
        }
        if (p === '1') {
          console.log("Let's play Bebe");
          this.initGame(4);
          p = 'q';
        } else if (p === 'q') {

        } else {
          console.log('I did not understand the request');
          p = 'q';
        }
      }
    }

    initGame(test = 0) {
      let number;
      while (Number.isInteger(number) === false) {
        if (test !== 0) {
          number = test;
        } else {
          number = parseInt(prompt("Enter the number of players : "));
        }
      }
      if (number < 1 || number > 6) {
        throw new Error('Invalid number of players')
      }
      console.log(`There are ${number} players`);
      this.createPlayer(number);

    }

}
module.exports = Game;