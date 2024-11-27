const Card = require('../src/Card');

test("The Card class has a type", () => {
    const card = new Card();
    card.setType('hearts');
    expect(card.getType()).toBe('hearts');
});