const Hand = require('../src/Hand');
const Card = require('../src/Card');

test("The hand class has cards", () => {
    const hand = new Hand();
    expect(hand.getCards()).toBe(null);
})

test("The hand class can add cards", () => {
    const hand = new Hand();
    const card = new Card();
    card.setRank('Ace');
    card.setSuit('hearts');
    expect(hand.add(card)).toBe(true);
})