const Game = require('../src/Game');
const GameStub = require('../src/GameStub');
const Dealer = require('../src/Dealer');



test("The Game has a dealer", () => {
    const game = new Game();
    expect(game.getDealer()).toBeInstanceOf(Dealer);
} )

test("The Game can create players between 1 and 6", () => {
    const game = new GameStub();
    game.createPlayer(2);
    expect(game.getPlayers().length).toBe(2);
    const game2 = new GameStub();
    expect(() => game2.createPlayer(0)).toThrow('Invalid number of players');
    const game3 = new GameStub();
    expect(() => game3.createPlayer(7)).toThrow('Invalid number of players');
} )

test("The Game has a start menu", () => {
    const game = new Game();
    const spy = jest.spyOn(game, 'start');
    const spy2 = jest.spyOn(game, 'initGame');
    game.start('1');
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
})