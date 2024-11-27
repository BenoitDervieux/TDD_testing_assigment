const Player = require('../src/Player');
const Dealer = require('../src/Dealer');
const Card = require('../src/Card');

test("The classes exists", () => {
    expect(new Player()).toBeInstanceOf(Player);
    expect(new Dealer()).toBeInstanceOf(Dealer);
    expect(new Card()).toBeInstanceOf(Card);
});

test("The Deck class exists", () => {
    expect(new Deck()).toBeInstanceOf(Deck);
});