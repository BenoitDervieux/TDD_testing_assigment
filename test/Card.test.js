const Card = require('../src/Card');
const Suit_types = require("../src/Suit_types");

test("The Card class has a suit", () => {
    const card = new Card();
    card.setSuit('hearts');
    expect(card.getSuit()).toBe('hearts');
});

test("The Card class has a suit that should be from the suit_type", () => {
    const card = new Card();
    card.setSuit('hearts');
    expect(isFromTheSuiteType(card.getSuit())).toBe(true);
    card.setSuit('Bubble');
    expect(isFromTheSuiteType(card.getSuit())).toBe(false);
});

function isFromTheSuiteType(suit_given) {
    for (const element in Suit_types) {
        if (suit_given === Suit_types[element]) {
            return true;
        }
    }
    return false;
}