const Deck = require('../src/Deck');


test("The deck has 52 Cards", () => {
    const Deck = new Deck();
    expect(Deck.cards.length).toBe(52);
} )