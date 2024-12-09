const Dealer = require('../src/Dealer');
const Player = require('../src/Player');
const prompt = require('prompt-sync')({ sigint: true});
const States = require('../src/States_types');

class Game {
  _dealer;
  _players = [];
    constructor() {
      this._dealer = new Dealer();
    }

    getDealer() {
      return this._dealer;
    }
    createPlayer(number) {
      if (number < 1 || number > 6) {
        throw new Error('Invalid number of players')
      }
      for (let i = 0; i < number; i++) {
        const player = new Player();
        player.setName(`Michel-${i}`)
        player.setState(States.PLAYING)
        this._players.push(player);
      }
    }

    start(automatic = false) {
      let p = "";
      p = automatic ? '1': p;
      while (p !== 'q') {
        const menu_string = "Welcome to the black Jack Game\n1 - Start the game\nq - Exit"
        this.stringDisplay(menu_string);
        switch(p) {
          case "":
            p = prompt("Enter your choice start menu: ")
            break;
          case "1":
            if (automatic === false) {
              this.initGame();
              p ="";
              this._players =[]
            } else {
              this.initGame(automatic);
              p = 'q';
            }
          case "q":
            break;
          default:
            this.stringDisplay('I did not understand the request');
            p = 'q';
        }
      }
    }

    stringDisplay(string) {
      // console.log(`\n${string}\n`)
    }

    initGame(automatic = false) {
      let number;
      while (Number.isInteger(number) === false) {
        if (automatic === true) {
          number = 1;
        } else {
            number = parseInt(prompt("Enter the number of players : "));
        }
      }
      if (number < 1 || number > 6) {
        throw new Error('Invalid number of players')
      }
      this.stringDisplay(`There are ${number} players`);
      this.createPlayer(number);
      this._dealer.shuffle();
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < this._players.length; j++) {
          const card = this._dealer.getDeck().draw_card();
          this.stringDisplay(`Player ${j} gets ${card.getStringRepresentation()}`)
          if (this._players[j].getState() === States.PLAYING) {
            this._players[j].getHand().addCard(card);
          }
        }
      }
      for (let i = 0; i < 2; i++) {
        const card = this._dealer.getDeck().draw_card();
        this.stringDisplay(`Dealer gets ${card.getStringRepresentation()}`)
        this._dealer.getHand().addCard(card);
      }
      this.play(automatic);
    }

    play(automatic = false) {
      // Here are the player's turn
      for (let i = 0; i < this._players.length; i++) {
        while (this._players[i].getHand().getValue() < 21) {
          this.stringDisplay(`Player ${i} plays:`)
          this.stringDisplay(`Points: ${this._players[i].getHand().getValue()}`)
          let result;
          if (automatic) {
            if (this._players[i].getHand().getValue() < 17) {
              this.stringDisplay("1 - Hit");
              result = 1;
            }
          } else {
            this.stringDisplay("1 - Hit");
            this.stringDisplay("2 - Stand");
            while (Number.isInteger(result) === false && (result !== 1 || result !== 2)) {
              result = parseInt(prompt("Enter your choice between hit and stand: "));
            }
          }

          if (result === 1) {
            const card = this._dealer.getDeck().draw_card();
            this.stringDisplay(`Player ${i} gets ${card.getStringRepresentation()}`)
            this._players[i].getHand().addCard(card);
          } else {
            break;
          }
      }
      if (this._players[i].getHand().getValue() > 21) {
        this.stringDisplay(`Player ${i} lost`)
        this._players[i].setState(States.LOST)
      } else {
        this.stringDisplay(`Player ${i} is standing`)
        this._players[i].setState(States.STOOD)
      }
    }
    // Here is the dealer's turn
    this.stringDisplay("Dealer's turn");
    while (this._dealer.getHand().getValue() < 17) {
      const card = this._dealer.getDeck().draw_card();
      this.stringDisplay(`Dealer gets ${card.getStringRepresentation()}`)
      this._dealer.getHand().addCard(card);
    }
    if (this._dealer.getHand().getValue() > 21) {
      this.stringDisplay('Dealer is busted');
      this._dealer.setState(States.BUSTED)
    } else {
      this.stringDisplay(`Dealer's score is: ${this._dealer.getHand().getValue()}`)
    }
    const winners = [];
    for (let i = 0; i < this._players.length; i++) {
      if (this._players[i].getState() === States.STOOD && (this._players[i].getHand().getValue() > this._dealer.getHand().getValue() || this._dealer.getState() === States.LOST)) {
        this._players[i].setState(States.WON)
        winners.push(this._players[i]);
      } else {
        this._players[i].setState(States.LOST)
      }
    }
    this.celebrate(winners);
  }

  celebrate(winner) {
    if (winner.length === 0) {
      this.stringDisplay('No one beat the dealer');
      return;
    } else {
      this.stringDisplay(`There are ${winner.length} winners`);
    }
    for (let i = 0; i < winner.length; i++) {
      const name = winner[i].getName();
      this.stringDisplay(`${name} has won`)
    }
  }
}
module.exports = Game;

// const game = new Game()
// game.start()