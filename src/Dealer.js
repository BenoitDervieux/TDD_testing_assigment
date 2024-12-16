const Player = require('./Player');
const Deck = require('./Deck');

class Dealer extends Player {

    #deck;
    constructor(hand, deck) {
        super(hand);
        if (!deck) {
            throw new Error('No deck provided');
        }
        this.#deck = deck
    };

    getDeck() {
        return this.#deck;
    }
}

module.exports = Dealer;