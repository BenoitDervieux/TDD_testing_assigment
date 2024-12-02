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

test("The Game has a start menu and initialize the game", () => {
    const game = new GameStub();
    const spy_start = jest.spyOn(game, 'start');
    const spy_initGame = jest.spyOn(game, 'initGame');
    // const spy_shuffle = jest.spyOn(game, 'shuffle');
    game.start('1');
    expect(spy_start).toHaveBeenCalled();
    expect(spy_initGame).toHaveBeenCalled();
    expect(game.getPlayers().length).toBe(4);
})

test("The Game distrobiutes cards to the players", () => {
    const game = new GameStub();
    game.start('1');
    expect(game.getPlayers().length).toBe(4);
    const players = game.getPlayers();
    for (let i = 0; i < players.length; i++) {
        expect(players[i].getHand().getCards().length).toBe(2);
    }
})