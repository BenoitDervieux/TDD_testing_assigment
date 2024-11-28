const Deck = require('../src/Deck');
const Deck_stub = require('../src/Deck_stub');
const Card = require('../src/Card');


test("The deck has 52 Cards", () => {
    const deck = new Deck();
    expect(deck.getNumberOfCards()).toBe(52);
} )

test("It is possible to draw card from the deck and atempting to get a card from an empty array should throw an error", () => {
    const deck = new Deck();
    for (let i = 0; i < 52; i++) {
        const card = deck.draw_card();
        expect(card).toBeInstanceOf(Card);
    }
    expect(() => deck.draw_card()).toThrow('No cards left in the deck');
})

test("The deck shuffle has a method to shuffle the cards", () => {
    const deck = new Deck_stub();
    const cards_array_1 = deck.getCards();
    deck.shuffle();
    const cards_array_2 = deck.getCards();
    expect(() => twoDifferentArrays(cards_array_1, cards_array_2)).toBe(true);
})

function twoDifferentArrays(array1, array2) {
    // consider that the two arrays are different if they are at least 50%+ of their content
    // which is not at the same place
    const size = (array1.length < array2.length) ? array1.length : array2.length;
    let errors = 0;
    for (let i = 0; i < size; i++) {
        if (array1[i] === array2[i]) {
            errors++;
        }
    }
    return Boolean(Math.round(errors/size));
}