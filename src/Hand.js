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
}

  module.exports = Hand;