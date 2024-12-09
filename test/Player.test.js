const Player = require('../src/Player');
const PlayerStub = require('../src/PlayerStub');
const HandStub = require('../src/HandStub');
const Hand = require('../src/Hand');
const States = require('../src/States_types');
const Strategy = require('../src/Strategy_types');
const Card = require('../src/Card');
const GameStub = require('../src/GameStub');


test("The player has a name, a budget and a hand", () => {
    const player = new Player();
    player.setName("Player1");
    expect(player.getName()).toBe("Player1");
    expect(player.getBudget()).toBe(100);
    expect(player.getHand()).toBeInstanceOf(Hand);
})



test("The player has a state and throws an exception for bad states", () => {
    const player = new Player();
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
    const player = new Player();
    player.setStrategy(Strategy.ALWAYS_HIT_ON_8);
    expect(player.getStrategy()).toBe("Always hit on 8")
    expect(() => player.setStrategy("bad strategy")).toThrow('Invalid strategy');
})

test("The player can hit()", () => {
    const playerStub = new PlayerStub();
    const card = new Card();
    card.setSuit('Hearts');
    card.setRank('Queen');
    playerStub.getHand().addCard(card);
    expect(playerStub.getHand().getCards().length).toBe(1);
    playerStub.hit();
    expect(playerStub.getHand().getCards().length).toBe(2);
    
})

test("The player have defined states while playing", () => {
    const game = new GameStub();
    game.start(true);
    const players = game.getPlayers();
    const dealer = game.getDealer()
    for (let i = 0; i < players.length; i++) {
        if (players[i].getHand().getValue() > 21 || (players[i].getHand().getValue() <= dealer.getHand().getValue())) {
            expect(players[i].getState()).toBe(States.LOST);
        } else if (players[i].getHand().getValue() <= 21) {
            expect(players[i].getState()).toBe(States.WON);
        }
    }
})

test('Player have proper name', () => {
    const game = new GameStub();
    game.start(true);
    const players = game.getPlayers();
    for (const p of players) {
        expect(p.getName()).toBeTruthy();
    }
})