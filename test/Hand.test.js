const Hand = require('../src/Hand');

test("The hand class has cards", () => {
    const hand = new Hand();
    expect(hand.getNumberOfCards()).toBe(0);
})