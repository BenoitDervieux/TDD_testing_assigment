const Suit_types = require("./Suit_types")
const Rank_types = require("./Rank_types")
class Card {
    #suit = '';
    #rank = '';
    constructor() {
    this.setSuit(Suit_types[Math.floor(Math.random() * Suit_types.length)])
    this.setRank(Rank_types[Math.floor(Math.random() * Rank_types.length)])
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

    getValue() {
        return this.#calculateValue(this.#rank);
    }

    getStringRepresentation() {
        return this.#firstCharUpperCase(this.#rank) + ' of ' + this.#firstCharUpperCase(this.#suit);
    }

    #isFromTheSuiteType(suit_given) {
        return Object.values(Suit_types).includes(suit_given);
    }

    #isFromTheRankType(rank_given) {
        return Object.values(Rank_types).includes(rank_given);
    }

    #calculateValue(rank) {
        return (Rank_types.indexOf(rank) + 1 < 11) ? Rank_types.indexOf(rank) + 1 : 11 ;
    }
    #firstCharUpperCase(word) {
        const firstLetter = word.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase();
        const remainingLetters = word.slice(1);
        const capitalizedWord = firstLetterCap + remainingLetters;
        return capitalizedWord;
    }

}

module.exports = Card;

