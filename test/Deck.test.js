const Deck = require('../src/Deck');
const Card = require('../src/Card');


test("The deck has 52 Cards", () => {
    const deck = new Deck();
    expect(deck.getNumberOfCards()).toBe(52);
} )

test("It is possible to draw card from the deck", () => {
    const deck = new Deck();
    const card = deck.draw_card();
    expect(card).toBeInstanceOf(Card);
})