const Player = require('../src/Player');
const Hand = require('../src/Hand');
const States = require('../src/States_types');
const Strategy = require('../src/Strategy_types');
const GameStub = require('../src/GameStub');
const Dealer = require('../src/Dealer');
const Deck = require('../src/Deck');


test("The player has a name, a budget and a hand", () => {
    const hand = new Hand();
    const player = new Player(hand);
    player.setName("Player1");
    expect(player.getName()).toBe("Player1");
    expect(player.getBudget()).toBe(100);
    expect(player.getHand()).toBeInstanceOf(Hand);
})



test("The player has a state and throws an exception for bad states", () => {
    const hand = new Hand();
    const player = new Player(hand);
    player.setState(States.PLAYING);
    expect(player.getState()).toBe("playing")
    player.setState(States.BUSTED);
    expect(player.getState()).toBe("busted")
    player.setState(States.BLACKJACK);
    expect(player.getState()).toBe("blackjack")
    player.setState(States.STOOD);
    expect(player.getState()).toBe("stood")
    player.setState(States.WON);
    expect(player.getState()).toBe("won")
    player.setState(States.LOST);
    expect(player.getState()).toBe("lost")
    player.setState(States.PUSHED);
    expect(player.getState()).toBe("pushed")
    player.setState(States.WAITING);
    expect(player.getState()).toBe("waiting")
    player.setState(States.BETTING);
    expect(player.getState()).toBe("betting")
    expect(() =>player.setState("unvalid state")).toThrow('Invalid state');
})

test("The player has a strategy and throws error when invalid strategy", () => {
    const hand = new Hand();
    const player = new Player(hand);
    player.setStrategy(Strategy.ALWAYS_HIT_ON_8);
    expect(player.getStrategy()).toBe("Always hit on 8")
    expect(() => player.setStrategy("bad strategy")).toThrow('Invalid strategy');
})

test("The player can hit()", () => {
    const hand = new Hand();
    const player = new Player(hand);
    const mockCard = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    player.getHand().addCard(mockCard);
    expect(player.getHand().getCards().length).toBe(1);
    player.getHand().addCard(mockCard);
    expect(player.getHand().getCards().length).toBe(2);
})

test("The player have defined states while playing", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new GameStub(dealer);
    game.start(true);
    const players = game.getPlayers();
    for (let i = 0; i < players.length; i++) {
        if (players[i].getHand().getValue() > 21 || (players[i].getHand().getValue() <= dealer.getHand().getValue())) {
            expect(players[i].getState()).toBe(States.LOST);
        } else if (players[i].getHand().getValue() <= 21) {
            expect(players[i].getState()).toBe(States.WON);
        }
    }
})

test('Player have proper name', () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new GameStub(dealer);
    game.start(true);
    const players = game.getPlayers();
    for (const p of players) {
        expect(p.getName()).toBeTruthy();
    }
})