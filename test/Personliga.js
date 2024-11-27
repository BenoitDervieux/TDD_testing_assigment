const Suit_types = require("../src/Suit_types");
const Rank_types = require("../src/Rank_types");
const Card = require("../src/Card")

const card = new Card();

card.setRank('Ace');


function calculateValue(rank) {
    return Rank_types.indexOf(rank) + 1;
}

console.log(card.getValue());