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
        return true;
    }

    getSoft() {
        return this.#soft;
    }
}

  module.exports = Hand;