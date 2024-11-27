const Player = require('../src/Player');

test("The player class exists", () => {
    let player = new Player();
    expect(player).toBeInstanceOf(Player);
});