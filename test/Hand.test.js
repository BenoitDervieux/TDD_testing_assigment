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

test("the hand class can calculate the value of 1 cards with no ace", () => {
    const hand = new Hand();
    const mockCard = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(2), // Mock the card's value
    };
    hand.addCard(mockCard)
    expect(hand.getValue()).toBe(2);
})

test("the hand class can calculate the value of 2 cards with no ace", () => {
    const hand = new Hand();
    const mockCard1 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    hand.addCard(mockCard1)
    const mockCard2 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    hand.addCard(mockCard2)
    expect(hand.getValue()).toBe(22);
})

test("the hand class can calculate the value of 2 cards with an ace and a card lower than 11", () => {
    const hand = new Hand();
    const mockCard = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    hand.addCard(mockCard)
    const card2 = new Card();
    card2.setRank('Ace');
    card2.setSuit('hearts');
    hand.addCard(card2)
    expect(hand.getValue()).toBe(21);
})

test("the hand class can calculate the value of 3 cards with two ace and a card equal to 11", () => {
    const hand = new Hand();
    const mockCard = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    hand.addCard(mockCard)
    const card2 = new Card();
    card2.setRank('Ace');
    card2.setSuit('hearts');
    hand.addCard(card2)
    const card3 = new Card();
    card3.setRank('Ace');
    card3.setSuit('diamonds');
    hand.addCard(card3)
    expect(hand.getValue()).toBe(23);
})