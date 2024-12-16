const Player = require('../src/Player');
const Dealer = require('../src/Dealer');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Hand = require('../src/Hand');

test("The classes exists", () => {
    expect(new Player(new Hand())).toBeInstanceOf(Player);
    expect(new Dealer(new Hand(), new Deck())).toBeInstanceOf(Dealer);
    expect(new Card()).toBeInstanceOf(Card);
    expect(new Deck()).toBeInstanceOf(Deck);
    expect(new Game(new Dealer(new Hand(), new Deck()))).toBeInstanceOf(Game);
    expect(new Hand()).toBeInstanceOf(Hand);
});
