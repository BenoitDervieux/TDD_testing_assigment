const Player = require('./Player');
const Deck = require('./Deck');

class Dealer extends Player {

    #deck;
    constructor() {
        super();
        this.#deck = new Deck();
    };

    getDeck() {
        return this.#deck;
    }

    shuffle() {
        this.#deck.shuffle();
    }
}

module.exports = Dealer;