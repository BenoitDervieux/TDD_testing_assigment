const Game = require('../src/Game');
const GameStub = require('../src/GameStub');
const Dealer = require('../src/Dealer');



test("The Game has a dealer", () => {
    const game = new Game();
    expect(game.getDealer()).toBeInstanceOf(Dealer);
} )

test("The Game can create players", () => {
    const game = new GameStub();
    game.createPlayer(2);
    expect(game.getPlayers().length).toBe(2);
} )