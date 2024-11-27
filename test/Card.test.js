const Card = require('../src/Card');

test("The Card class has a type", () => {
    const card = new Card();
    card.setSuit('hearts');
    expect(card.getSuit()).toBe('hearts');
});