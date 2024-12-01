const Player = require('../src/Player');


test("The player has a name", () => {
    const player = new Player();
    player.setName("Player1");
    expect(player.getName()).toBe("Player1");
})

test("The player has a budget", () => {
    const player = new Player();
    expect(player.getBudget()).toBe(100);
})