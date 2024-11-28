// const Suit_types = require("../src/Suit_types");
// const Rank_types = require("../src/Rank_types");
// const Card = require("../src/Card")
// const Deck = require("./src/Deck")

const DeckStub = require("../src/DeckStub");

// const deck = new DeckStub();
// const cards_array_1 = deck.getCards();

// for (const elements in cards_array_1) {
//     console.log(cards_array_1[elements].getStringRepresentation())
// }

// deck.shuffle();

// console.log("##################################")
// console.log("##################################")
// console.log("##################################")

// const cards_array_2 = deck.getCards();

// for (const elements in cards_array_2) {
//     console.log(cards_array_2[elements].getStringRepresentation())
// }

const deck = new DeckStub();

// let values1 =
// deck.shuffle();
const cards_array_1 = deck.getCards();
// console.log(cardsAreRandom(cards_array_1));
let result = cardsAreRandom(cards_array_1);
console.log("Results: " + result)
// deck.shuffle();
// console.log(cardsAreRandom(cards_array_1));
// for (const elements of cards_array_1) {
//     console.log(elements.getStringRepresentation());
//     console.log(elements.getValue());
// }

// console.log(cardsAreRandom(cards_array_1));

// cards_array_1[1].getValue() - cards_array_1[0].getValue()


function cardsAreRandom(cards) {
    // consider that the two arrays are different if they are at least 50%+ of their content
    // which is not at the same place
    const size = cards.length;

    let errors = 0;
    for (let i = 1; i < cards.length; i++) {
        if (cards[i].getValue() === 11 && cards[i-1].getValue() === 11){
            errors++;
        } else if (cards[i].getValue() === 1 && cards[i-1].getValue() === 11) {
            errors++;
        } else if (cards[i].getValue() === (cards[i-1].getValue() + 1)) {
            errors++;
        }    
    }
    console.log("The cards errors: " + errors)
    console.log("Round: " + Math.round(errors/size));
    return !Boolean(Math.round(errors/size));
}