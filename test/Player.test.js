const Player = require('../src/Player');
const HandStub = require('../src/HandStub');
const Hand = require('../src/Hand');
const States = require('../src/States_types');


test("The player has a name, a budget and a hand", () => {
    const player = new Player();
    player.setName("Player1");
    expect(player.getName()).toBe("Player1");
    expect(player.getBudget()).toBe(100);
    expect(player.getHand()).toBeInstanceOf(Hand);
})



test("The player has a state", () => {
    const player = new Player();
    player.setState(States.PLAYING);
    expect(player.getState()).toBe("playing")
})