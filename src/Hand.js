class Hand {
    #cards = [];
    #soft = false;
    constructor() {
    }

    getCards() {
        return (this.#cards.length == 0) ? null : this.#cards;
    }

    addCard(card) {
        this.#cards.push(card);
        if (card.getValue() === 1) {
            this.#soft = true;
        }
        return true;
    }

    getSoft() {
        return this.#soft;
    }

    getValue() {
        let sum = 0;
        for (const card of this.#cards) {
            if (card.getValue() === 1) {
                sum += 11;
            } else {
                sum += card.getValue();
            }
        }
        return sum;
    }
}

  module.exports = Hand;