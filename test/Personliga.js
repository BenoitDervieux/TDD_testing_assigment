const Suit_types = require("../src/Suit_types");
const Rank_types = require("../src/Rank_types");
const Card = require("../src/Card")

const card = new Card();

card.setRank('Ace');
card.setSuit("Hearts")

function firstCharUpperCase(word) {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
}

console.log(card.getStringRepresentation())