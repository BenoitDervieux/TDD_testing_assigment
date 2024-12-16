const Suit_types = require("./Suit_types")
const Rank_types = require("./Rank_types")
const Card = require("./Card")
class Deck {
    constructor() {
  }
  getNumberOfCards() {
    return this._cards.length;
  }

  draw_card() {
    return new Card();
  }
}

  module.exports = Deck;