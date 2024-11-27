const Player = require('../src/Player');

test("The player class exists", () => {
    expect(new Player()).toBeInstanceOf(Player);
});