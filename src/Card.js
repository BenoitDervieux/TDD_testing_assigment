const Suit_types = require("./Suit_types")
class Card {
    #suit = '';
    #rank = '';
    constructor() {
    }

    getSuit() {
        return this.#suit;
    }
    setSuit(suit) {
        this.#suit = suit;
    }


}

  module.exports = Card;