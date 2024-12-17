const Game = require('../src/Game');
const Dealer = require('../src/Dealer');
const Hand = require('../src/Hand');
const Deck = require('../src/Deck');
const State_types = require('../src/States_types');
const Player = require('../src/Player');

test("The Game throws an error if no dealer is provided", () => {
    expect(() => new Game()).toThrow('No dealer provided');
})

test("The Game has a dealer", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    expect(game.getDealer()).toBeInstanceOf(Dealer);
} )

test("The Game can create players between 1 and 6", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    game.createPlayer(2);
    expect(game.getPlayers().length).toBe(2);
    const game2 = new Game(new Dealer(new Hand(), new Deck()));
    expect(() => game2.createPlayer(0)).toThrow('Invalid number of players');
    const game3 = new Game(new Dealer(new Hand(), new Deck()));
    expect(() => game3.createPlayer(7)).toThrow('Invalid number of players');
} )

test("The Game has a start menu and initialize the game", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const spy_start = jest.spyOn(game, 'start');
    const spy_initGame = jest.spyOn(game, 'initGame');
    const spy_play = jest.spyOn(game, 'play');
    game.start(true);
    expect(spy_start).toHaveBeenCalled();
    expect(spy_initGame).toHaveBeenCalled();
    expect(game.getPlayers().length).toBe(1);
    expect(spy_play).toHaveBeenCalled();
})

test("The Game distributes cards to the players and the dealer", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    game.start(true);
    expect(game.getPlayers().length).toBe(1);
    const players = game.getPlayers();
    for (let i = 0; i < players.length; i++) {
        expect(players[i].getHand().getCards().length).toBeGreaterThanOrEqual(2);
    }
    expect(game.getDealer().getHand().getCards().length).toBeGreaterThanOrEqual(2);
})


test("The Game makes the distinction between winners and loosers", () => {
    for (let i = 0; i < 10; i++) {
        const hand = new Hand();
        const deck = new Deck();
        const dealer = new Dealer(hand, deck);
        const game = new Game(dealer);
        game.start(true);
        expect(game.getPlayers().length).toBe(1);
        const players = game.getPlayers();
        for (let i = 0; i < players.length; i++) {
            if (players[i].getHand().getValue() > dealer.getHand().getValue() && players[i].getState() !== State_types.LOST) {
                expect(players[i].getState()).toBe(State_types.WON)
            }
        }
    }
})

test("The Game celebrates its winner", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const spy_celebrate = jest.spyOn(game, 'celebrate');
    game.start(true);
    expect(spy_celebrate).toHaveBeenCalled();
})

test("The Game distributes card to players", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const player1 = new Player(new Hand());
    player1.setState(State_types.PLAYING);
    const player2 = new Player(new Hand());
    player2.setState(State_types.PLAYING);
    const arrayPlayers = [player1, player2];
    game.distributeToPlayers(arrayPlayers, dealer);
    expect(player1.getHand().getCards().length).toBe(2);
    expect(player2.getHand().getCards().length).toBe(2);
})

test("The game distributes card to the dealer", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    game.distributeToDealer(dealer);
    expect(dealer.getHand().getCards().length).toBe(2);
})