const Player = require('../src/Player');


test("The player has a name", () => {
    const player = new Player();
    player.setName("Player1");
    expect(player.getName()).toBe("Player1");
})