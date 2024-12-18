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

test("The game distributes card to the dealer initially", () => {
    for (let i = 0; i < 10; i++) {
        const hand = new Hand();
        const deck = new Deck();
        const dealer = new Dealer(hand, deck);
        const game = new Game(dealer);
        game.distributeTwoCardsToDealer(dealer);
        expect(dealer.getHand().getCards().length).toBe(2);
    }
})

test("The game distributes card to the dealer if his initial two cards are less than 17", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const mockCard1 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    const mockCard2 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(9), // Mock the card's value
    };
    dealer.getHand().addCard(mockCard1)
    dealer.getHand().addCard(mockCard2)
    game.distributeToDealer(dealer)
    expect(dealer.getHand().getCards().length).toBe(2)

    const hand2 = new Hand();
    const deck2 = new Deck();
    const dealer2 = new Dealer(hand2, deck2);
    const game2 = new Game(dealer2);
    const mockCard3 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(5), // Mock the card's value
    };
    const mockCard4 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(3), // Mock the card's value
    };
    dealer2.getHand().addCard(mockCard3)
    dealer2.getHand().addCard(mockCard4)
    game2.distributeToDealer(dealer2)
    expect(dealer2.getHand().getCards().length > 2).toBe(true)
})

test("The game set up lost state if the player has more than 21 points", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const hand2 = new Hand()
    const player = new Player(hand2)
    const mockCard1 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    const mockCard2 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    hand2.addCard(mockCard1)
    hand2.addCard(mockCard2)
    game.adjustState(player)
    expect(player.getState()).toBe(State_types.LOST)
})

test("The game set up busted state if the dealer has more than 21 points", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const mockCard1 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    const mockCard2 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    hand.addCard(mockCard1)
    hand.addCard(mockCard2)
    game.adjustState(dealer)
    expect(dealer.getState()).toBe(State_types.BUSTED)
})

test("The game recognizes that there are no winners if all the players have lost", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const mockCard1 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    const mockCard2 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    hand.addCard(mockCard1)
    hand.addCard(mockCard2)
    const hand2 = new Hand()
    const player = new Player(hand2)
    const mockCard3 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    const mockCard4 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(11), // Mock the card's value
    };
    hand2.addCard(mockCard3)
    hand2.addCard(mockCard4)
    game.adjustState(player)
    game.adjustState(dealer)
    const winner = game.getWinners(player, dealer)
    expect(winner).toHaveLength(0)
})

test("The game recognizes that there are no winners if all the players have a lower score than the dealer", () => {
    const hand = new Hand();
    const deck = new Deck();
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    const mockCard1 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    const mockCard2 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    hand.addCard(mockCard1)
    hand.addCard(mockCard2)
    const hand2 = new Hand()
    const player = new Player(hand2)
    const mockCard3 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    const mockCard4 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(9), // Mock the card's value
    };
    hand2.addCard(mockCard3)
    hand2.addCard(mockCard4)
    game.adjustState(player)
    game.adjustState(dealer)
    const winner = game.getWinners(player, dealer)
    expect(winner).toHaveLength(0)
})

test("The game recognizes that there is 1 winner if the player have a higher score than the dealer", () => {
    const hand = new Hand();
    const deck = new Deck();
    const mockCard1 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    const mockCard2 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(9), // Mock the card's value
    };
    hand.addCard(mockCard1)
    hand.addCard(mockCard2)
    const dealer = new Dealer(hand, deck);
    const game = new Game(dealer);
    // Giving value to the player
    const hand2 = new Hand()
    const mockCard3 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    const mockCard4 = {
        setSuit: jest.fn(),
        setRank: jest.fn(),
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
    };
    hand2.addCard(mockCard3)
    hand2.addCard(mockCard4)
    const player = new Player(hand2)
    let players = []
    players.push(player)
    dealer.setState(State_types.PLAYING)
    player.setState(State_types.STOOD)
    players = game.getWinners(players, dealer)
    expect(player.getHand().getValue()).toBe(20)
    expect(dealer.getHand().getValue()).toBe(19)
    expect(players).toHaveLength(1)
})
