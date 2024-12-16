const Dealer = require('../src/Dealer');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const GameStub = require('../src/GameStub');
const Hand = require('../src/Hand');

test("The dealer triggers an error if no deck is provided", () => {
    expect(() => new Dealer()).toThrow('No deck provided');
})

test("The dealer has a deck", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    expect(dealer.getDeck()).toBeInstanceOf(Deck);
})

test("The dealer can give out a card", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const card = dealer.getDeck().draw_card();
    expect(card).toBeInstanceOf(Card);
})

test("The dealer plays after the players", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new GameStub(dealer);
    game.start(true);
    expect(dealer.getHand().getValue()).toBeGreaterThanOrEqual(17)
})


