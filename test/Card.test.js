const Card = require('../src/Card');
const Suit_types = require("../src/Suit_types");
const WrongInputException = require('../src/WrongInputException')

test("The Card class has a suit from the suit_type", () => {
    const card = new Card();
    card.setSuit('hearts');
    expect(card.getSuit()).toBe('hearts');
    expect(() => card.setSuit('Bubble')).toThrow("Invalid input type");
});

