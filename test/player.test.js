const Player = require('../src/Player');
const Dealer = require('../src/Dealer');

test("The player class exists", () => {
    expect(new Player()).toBeInstanceOf(Player);
});

test("The dealer class esists", () => {
    expect(new Dealer()).toBeInstanceOf(Dealer);
})