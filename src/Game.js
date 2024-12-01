const Dealer = require('../src/Dealer');
const Player = require('../src/Player');
const prompt = require('prompt-sync')({ sigint: true});
const States = require('../src/States_types');

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

    start(automatic = false) {
      let p = "";
      if (automatic) {
        p = '1';
      }
      while (p !== 'q') {
        console.log("Welcome to the black Jack Game");
        console.log("1 - Start the game");
        console.log("q - Exit");
        if ( p === "") {
          p = prompt("Enter your choice: ")
        }
        if (p === '1') {
          this.initGame(4);
          p = 'q';
        } else if (p === 'q') {

        } else {
          console.log('I did not understand the request');
          p = 'q';
        }
      }
    }

    initGame(automatic = false) {
      let number;
      while (Number.isInteger(number) === false) {
        if (automatic) {
          number = 4;
        } else {
          number = parseInt(prompt("Enter the number of players : "));
        }
      }
      if (number < 1 || number > 6) {
        throw new Error('Invalid number of players')
      }
      console.log(`There are ${number} players`);
      this.createPlayer(number);
      this.#dealer.shuffle();
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < this._players.length; j++) {
          const card = this.#dealer.getDeck().draw_card();
          console.log(`Player ${j} gets ${card.getStringRepresentation()}`)
          this._players[j].getHand().addCard(card);
        }
      }
      for (let i = 0; i < 2; i++) {
        const card = this.#dealer.getDeck().draw_card();
        console.log(`Dealer gets ${card.getStringRepresentation()}`)
        this.#dealer.getHand().addCard(card);
      }
      this.play(automatic);
    }

    play(automatic = false) {
      for (let i = 0; i < this._players.length; i++) {
        while (this._players[i].getHand().getValue() < 21) {
          console.log(`Player ${i} plays:`)
          console.log(`Points: ${this._players[i].getHand().getValue()}`)
          let result;
          if (automatic) {
            if (this._players[i].getHand().getValue() < 17) {
              console.log("1 - Hit");
              result = 1;
            }
          } else {
            console.log("1 - Hit");
            console.log("2 - Stand");
            let result;
            while (Number.isInteger(result) === false && (result !== 1 || result !== 2)) {
              result = parseInt(prompt("Enter your choice : "));
            }
          }

          if (result === 1) {
            const card = this.#dealer.getDeck().draw_card();
            console.log(`Player ${i} gets ${card.getStringRepresentation()}`)
            this._players[i].getHand().addCard(card);
          } else {
            break;
          }
          if (this._players[i].getHand().getValue() > 21) {
            console.log(`Player ${i} lost`)
            this._players[i].setState(States.LOST)
          }
      }
    }
  }

}
module.exports = Game;

// const game = new Game()
// game.start()