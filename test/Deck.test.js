const Deck = require('../src/Deck');
const Card = require('../src/Card');

test("The deck crates cards dynamically", () => {
    const deck = new Deck();
    for (let i = 0; i < 1000; i++) {
        const card = deck.draw_card();
        expect(card).toBeInstanceOf(Card);
    }
})

test("The deck shuffle has a method to shuffle the cards", () => {
    const deck = new Deck();
    let cards_array_1 = []
    for (let i = 0; i < 1000; i++) {
        const card = deck.draw_card();
        cards_array_1.push(card);
    }
    let result = cardsAreRandom(cards_array_1);
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