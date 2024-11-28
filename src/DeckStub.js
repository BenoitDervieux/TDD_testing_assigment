const Deck = require('./Deck');

class DeckStub extends Deck {
    constructor() {
        super();
    }

    getCards() {
        return this._cards;
    }
}

module.exports = DeckStub;