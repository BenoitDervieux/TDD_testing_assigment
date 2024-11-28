const Deck = require('../src/Deck');
const DeckStub = require('../src/DeckStub');
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
    const deck = new DeckStub();
    const cards_array_1 = deck.getCards();
    let result = cardsAreRandom(cards_array_1);
    expect(result).toBe(false);
    deck.shuffle();
    result = cardsAreRandom(cards_array_1);
    expect(result).toBe(true);
    
})

function cardsAreRandom(cards) {
    // consider that the two arrays are different if they are at least 50%+ of their content
    // which is not at the same place
    const size = cards.length;
    let errors = 0;
    for (let i = 1; i < cards.length; i++) {
        if (cards[i].getValue() === 11 && cards[i-1].getValue() === 11){
            errors++;
        } else if (cards[i].getValue() === 1 && cards[i-1].getValue() === 11) {
            errors++;
        } else if (cards[i].getValue() === (cards[i-1].getValue() + 1)) {
            errors++;
        }    
    }
    // console.log("The cards length" + Math.round(errors/size))
    return !Boolean(Math.round(errors/size));
}