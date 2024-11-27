const Player = require('../src/Player');
const Dealer = require('../src/Dealer');

test("The classes exists", () => {
    expect(new Player()).toBeInstanceOf(Player);
    expect(new Dealer()).toBeInstanceOf(Dealer);
});

test("The class cards exists", () => {
    expect(new Card()).toBeInstanceOf(Card);
})