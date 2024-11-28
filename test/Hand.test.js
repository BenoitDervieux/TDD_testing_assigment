const Hand = require('../src/Hand');
const Card = require('../src/Card');

test("The hand class can add cards and get them", () => {
    const hand = new Hand();
    expect(hand.getCards()).toBe(null);
    const card = new Card();
    card.setRank('Ace');
    card.setSuit('hearts');
    expect(hand.addCard(card)).toBe(true);
    expect(hand.getCards().length).toBe(1);
})