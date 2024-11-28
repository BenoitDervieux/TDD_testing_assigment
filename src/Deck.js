const Suit_types = require("./Suit_types")
const Rank_types = require("./Rank_types")
const Card = require("./Card")
class Deck {
    #cards = [];
    constructor() {
      for (const suit of Suit_types) {
        for (const rank of Rank_types) {
          const card = new Card();
          card.setSuit(suit);
          card.setRank(rank);
          this.#cards.push(card);
        }
    }
  }
  getNumberOfCards() {
    return this.#cards.length;
  }

  draw_card() {
    if (this.#cards.length === 0) {
      throw new Error('No cards left in the deck');
    }
    return this.#cards.pop();
  }
}

  module.exports = Deck;