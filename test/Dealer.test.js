const Dealer = require('../src/Dealer');

test("The dealer has a deck", () => {
    const dealer = new Dealer();
    expect(dealer.getDeck()).toBeInstanceOf(Deck);
    
})