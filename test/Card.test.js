const Card = require('../src/Card');
const Suit_types = require("../src/Suit_types");

test("The Card class has a suit from the suit_type", () => {
    const card = new Card();
    card.setSuit('Hearts');
    expect(card.getSuit()).toBe('hearts');
    expect(() => card.setSuit('Bubble')).toThrow("Invalid input type");
});

test("The Card class has a rank from the rank_type", () => {
    const card = new Card();
    card.setRank('Ace');
    expect(card.getRank()).toBe('ace');
    expect(() => card.setRank('Bubble')).toThrow("Invalid input type");
});

