const Deck = require('./Deck');

class Deck_stub extends Deck {
    constructor() {
        super();
    }

    getCards() {
        return this._cards;
    }
}