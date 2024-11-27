const Suit_types = require("../src/Suit_types");
const Card = require("../src/Card")

const card = new Card();
card.setSuit('hearts');
console.log(card.getSuit())
card.setSuit('bubble');
console.log(card.getSuit())