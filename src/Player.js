const Hand = require('../src/Hand');
const States = require('../src/States_types');

class Player {
    #name ="";
    #budget;
    #hand;
    #state;
    constructor() {
      this.#budget = 100;
      this.#hand = new Hand();
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
    getBudget() {
        return this.#budget;
    }
    getHand() {
        return this.#hand;
    }
    getState() {
        return this.#state;
    }
    setState(state) {
      switch (state) {
        case States.PLAYING:
          this.#state = state;
          break;
        case States.BUSTED:
          this.#state = state;
          break;
        case States.BLACKJACK:
          this.#state = state;
          break;
        case States.STOOD:
          this.#state = state;
          break;
        case States.WON:
          this.#state = state;
          break;
        case States.LOST:
          this.#state = state;
          break;
        case States.PUSHED:
          this.#state = state;
          break;
        case States.WAITING:
          this.#state = state;
          break;
        case States.BETTING:
          this.#state = state;
          break;
        default:
          throw new Error('Invalid state');
      }
        
    }


}


  module.exports = Player;