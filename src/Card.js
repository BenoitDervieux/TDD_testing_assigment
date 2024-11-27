const Suit_types = require("./Suit_types")
const Rank_types = require("./Rank_types")
class Card {
    #suit = '';
    #rank = '';
    constructor() {
    }

    getSuit() {
        return this.#suit;
    }
    setSuit(suit) {
        if(this.#isFromTheSuiteType(suit.toLowerCase()) === true) {
            this.#suit = suit.toLowerCase();
        } else {
            throw new Error('Invalid input type');
        }  
    }

    getRank() {
        return this.#rank;
    }
    setRank(rank) {
        if(this.#isFromTheRankType(rank.toLowerCase()) === true) {
            this.#rank = rank.toLowerCase();
        } else {
            throw new Error('Invalid input type');
        }  
    }

    #isFromTheSuiteType(suit_given) {
        return Object.values(Suit_types).includes(suit_given);
    }

    #isFromTheRankType(rank_given) {
        return Object.values(Rank_types).includes(rank_given);
    }

}

module.exports = Card;

