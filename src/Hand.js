class Hand {
    #cards = [];
    constructor() {
    }

    getCards() {
        return (this.#cards.length == 0) ? null : this.#cards;
    }

    addCard(card) {
        this.#cards.push(card);
        return true;
    }
}

  module.exports = Hand;