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

test("The card has no value", () => {
    const card = new Card();
    card.setSuit('Hearts');
    card.setRank('Ace');
    expect(card.getValue()).toBe(1);
    card.setRank('Two');
    expect(card.getValue()).toBe(2);
    card.setRank('Eight');
    expect(card.getValue()).toBe(8);
    card.setRank('Ten');
    expect(card.getValue()).toBe(10);
    card.setRank('Jack');
    expect(card.getValue()).toBe(11);
    card.setRank('Queen');
    expect(card.getValue()).toBe(11);
    card.setRank('King');
    expect(card.getValue()).toBe(11);
})

