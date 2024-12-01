const Player = require('../src/Player');


test("The player has a name", () => {
    const player = new Player();
    expect(player.getName()).toBe("PLayer1");
})