const Player = require('../src/Player');
const Dealer = require('../src/Dealer');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

test("The classes exists", () => {
    expect(new Player()).toBeInstanceOf(Player);
    expect(new Dealer()).toBeInstanceOf(Dealer);
    expect(new Card()).toBeInstanceOf(Card);
    expect(new Deck()).toBeInstanceOf(Deck);
    expect(new Game()).toBeInstanceOf(Game);
});