const Card = require('../src/Card');
const Suit_types = require("../src/Suit_types");
const WrongInputException = require('../src/WrongInputException')

test("The Card class has a suit", () => {
    const card = new Card();
    card.setSuit('hearts');
    expect(card.getSuit()).toBe('hearts');
});

test("The Card class has a suit that should be from the suit_type", () => {
    const card = new Card();
    expect(() => card.setSuit('Bubble')).toThrow("Invalid input type");
    // expect(card.setSuit('Bubble')).toBeInstanceOf(WrongInputException);
});

