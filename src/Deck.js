const Suit_types = require("./Suit_types")
const Rank_types = require("./Rank_types")
const Card = require("./Card")
class Deck {
    constructor() {
  }
  draw_card() {
    return new Card();
  }
}

  module.exports = Deck;