const Dealer = require('../src/Dealer');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const GameStub = require('../src/GameStub');

test("The dealer has a deck", () => {
    const dealer = new Dealer();
    expect(dealer.getDeck()).toBeInstanceOf(Deck);
})

test("The dealer can give out a card", () => {
    const dealer = new Dealer();
    const card = dealer.getDeck().draw_card();
    expect(card).toBeInstanceOf(Card);
})

test("The dealer plays after the players", () => {
    const game = new GameStub();
    game.start(true);
    const dealer = game.getDealer();
    expect(dealer.getHand().getValue()).toBeGreaterThanOrEqual(17)
})


