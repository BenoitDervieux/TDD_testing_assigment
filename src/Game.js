const Dealer = require('../src/Dealer');
const Player = require('../src/Player');
const prompt = require('prompt-sync')({ sigint: true});
const States = require('../src/States_types');
const Hand = require('../src/Hand');
const Deck = require('../src/Deck');
const State_types = require('../src/States_types');

class Game {
  _dealer;
  _players = [];
    constructor(dealer, promptFunction = null) {
      if (!dealer) {
        throw new Error('No dealer provided')
      }
      this._dealer = dealer
      this.prompt = promptFunction || (() => null);
    }

    getDealer() {
      return this._dealer;
    }

    getPlayers() {
      return this._players;
  }
    createPlayer(number) {
      if (number < 1 || number > 6) {
        throw new Error('Invalid number of players')
      }
      for (let i = 0; i < number; i++) {
        const hand = new Hand();
        const player = new Player(hand);
        player.setName(`Michel-${i}`)
        player.setState(States.PLAYING)
        this._players.push(player);
      }
    }

    stringDisplay(string) {
       // console.log(`\n${string}`)
    }

    start(automatic = false) {
      let p = "";
      let r = ""
      p = automatic ? '1': p;
      while (p !== 'q') {
        const menu_string = "Welcome to the black Jack Game\n1 - Start the game\nq - Exit"
        this.stringDisplay(menu_string);
        switch(p) {
          case "":
            p = prompt("Enter your choice start menu: ")
            if (p !== "1") return
          case "1":
            if (automatic === false) {
              this.initGame();
              this._players =[]
              p ="";
              break
            } else {
              this.initGame(automatic);
              p = 'q';
            }
          case "q":
            this.gameExit()
            // return
          default:
            this.stringDisplay('I did not understand the request');
            p = 'q';
            // return
        }
      }
    }

    gameExit() {
      // process.exit();
    }

    initGame(automatic = false) {
      let number = this.getNumberOfPlayer(automatic);
      this.stringDisplay(`There are ${number} players`);
      this.createPlayer(number);
      this.distributeToPlayers(this._players, this._dealer);
      this.distributeTwoCardsToDealer(this._dealer);
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
      this.adjustState(this._players[i])
    }
    // Here is the dealer's turn
    this.stringDisplay("Dealer's turn");
    this.distributeToDealer(this._dealer);
    this.adjustState(this._dealer)
    const winners = this.getWinners(this._players, this._dealer);
    this.celebrate(winners);
  }

    getNumberOfPlayer(automatic = false) {
      let number;
      if (automatic) return 1;
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
      return number;
    }

    distributeToPlayers(players, dealer) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < players.length; j++) {
          const card = dealer.getDeck().draw_card();
          this.stringDisplay(`Player ${j} gets ${card.getStringRepresentation()}`)
          if (players[j].getState() === States.PLAYING) {
            players[j].getHand().addCard(card);
          }
        }
      }
    }

    distributeTwoCardsToDealer(dealer) {
      for (let i = 0; i < 2; i++) {
        const card = dealer.getDeck().draw_card();
        this.stringDisplay(`Dealer gets ${card.getStringRepresentation()}`)
        this._dealer.getHand().addCard(card);
      }
    }

  distributeToDealer(dealer) {
    while (dealer.getHand().getValue() < 17) {
      const card = dealer.getDeck().draw_card();
      this.stringDisplay(`Dealer gets ${card.getStringRepresentation()}`)
      dealer.getHand().addCard(card);
    }
  }

  getWinners(players, dealer) {
    let winners = []
    for (let i = 0; i < players.length; i++) {
      if (players[i].getHand().getValue() > 21 || ((dealer.getHand().getValue() < 22) && (dealer.getHand().getValue() > players[i].getHand().getValue()))) {
        players[i].setState(States.LOST)
      }
      if ((players[i].getState() !== State_types.LOST) && (players[i].getHand().getValue() > dealer.getHand().getValue())) {
        players[i].setState(States.WON)
        winners.push(players[i])
      } else if (dealer.getState() === State_types.BUSTED && players[i].getState() !== State_types.LOST) {
        players[i].setState(States.WON)
        winners.push(players[i])
      }
    }
    return winners;
  }

  adjustState(player) {
    if (player.getHand().getValue() > 21) {
      if (player instanceof Dealer) {
        this.stringDisplay('Dealer is busted');
        player.setState(States.BUSTED)
      } else {
        this.stringDisplay(`Player ${player.getName()} lost`)
        player.setState(States.LOST)
      } 
    } else {
      if (player instanceof Dealer) {
        this.stringDisplay(`Dealer's score is: ${player.getHand().getValue()}`)
        player.setState(States.PLAYING)
      } else {
        this.stringDisplay(`Player ${player.getName()} is standing`)
        player.setState(States.STOOD)
      } 
    }
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

// const hand = new Hand();
// const deck = new Deck();
// const dealer = new Dealer(hand, deck);
// const game = new Game(dealer)
// game.start()