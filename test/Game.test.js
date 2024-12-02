const Game = require('../src/Game');
const Dealer = require('../src/Dealer');



test("The Game has a dealer", () => {
    const game = new Game();
    expect(game.getDealer()).toBeInstanceOf(Dealer);
} )