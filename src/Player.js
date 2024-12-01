const Hand = require('../src/Hand');
const States = require('../src/States_types');
const Strategy = require('../src/Strategy_types');

class Player {
    #name ="";
    #budget;
    #hand;
    #state;
    #strategy;
    constructor() {
      this.#budget = 100;
      this.#hand = new Hand();
      this.#state = States.WAITING;
      this.#strategy = Strategy.ALWAYS_HIT_ON_8;
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
    getStrategy() {
        return this.#strategy;
    }
    setStrategy(strategy) {
      switch (state) {
        case Strategy.ALWAYS_HIT_ON_8:
          this.#strategy = strategy;
          break;
        case Strategy.STAND_ON_17:
          this.#strategy = strategy;  
          break;
        default:
          throw new Error('Invalid strategy');
    }
  }


}


  module.exports = Player;