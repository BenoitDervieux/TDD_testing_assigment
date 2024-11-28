class Hand {
    #cards = [];
    constructor() {
    }

    getCards() {
        return (this.#cards.length == 0) ? null : this.#cards;
    }
}

  module.exports = Hand;