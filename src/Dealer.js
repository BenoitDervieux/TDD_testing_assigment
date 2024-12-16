const Player = require('./Player');
const Deck = require('./Deck');

class Dealer extends Player {

    #deck;
    constructor(hand, deck) {
        super(hand);
        this.#deck = deck
    };

    getDeck() {
        return this.#deck;
    }
}

module.exports = Dealer;