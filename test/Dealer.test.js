const Dealer = require('../src/Dealer');
const Deck = require('../src/Deck');

test("The dealer has a deck", () => {
    const dealer = new Dealer();
    expect(dealer.getDeck()).toBeInstanceOf(Deck);
})