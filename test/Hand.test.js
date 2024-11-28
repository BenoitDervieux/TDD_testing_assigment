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

test("The hand class has a soft attribute", () => {
    const hand = new Hand();
    expect(hand.getSoft()).toBe(false);
});

test("The hand class can calculate a soft", () => {
    const hand = new Hand();
    const card1 = new Card();
    card1.setRank('Two');
    card1.setSuit('hearts');
    hand.addCard(card1)
    expect(hand.getSoft()).toBe(false);
    const card2 = new Card();
    card2.setRank('Ace');
    card2.setSuit('hearts');
    hand.addCard(card2)
    expect(hand.getSoft()).toBe(true);
});