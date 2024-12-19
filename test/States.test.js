const Player = require('../src/Player');
const Hand = require('../src/Hand');
const States = require('../src/States_types');
const Strategy = require('../src/Strategy_types');
const Dealer = require('../src/Dealer');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

test("When the dealer is higher than the player and they are both lower than 21, the player has lost and the dealer has won", () => {
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
        getValue: jest.fn().mockReturnValue(10), // Mock the card's value
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
        getValue: jest.fn().mockReturnValue(9), // Mock the card's value
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
    game.adjustState(player, dealer)
    expect(player.getState()).toBe(States.LOST)
    expect(dealer.getState()).toBe(States.LOST)
})