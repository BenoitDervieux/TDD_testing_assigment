const Deck = require('../src/Deck');


test("The deck has 52 Cards", () => {
    const deck = new Deck();
    expect(deck.getNumberOfCards()).toBe(52);
} )