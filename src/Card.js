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
        if(this.#isFromTheSuiteType(suit) === true) {
            this.#suit = suit;
        } else {
            throw new Error('Invalid input type');
        }  
    }

    #isFromTheSuiteType(suit_given) {
        return Object.values(Suit_types).includes(suit_given);
    }

}

module.exports = Card;

