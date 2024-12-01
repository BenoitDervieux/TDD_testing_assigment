const Hand = require('../src/Hand');

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
        this.#state = state;
    }


}


  module.exports = Player;