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
        for (const card of this.#cards) {
            if (card.getValue() === 1) {
                this.#soft = true;
            } else {
                this.#soft = false;
            }
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
        if (sum > 21 && this.#soft) {
            sum -= 10;
        }
        return sum ;
    }
}

  module.exports = Hand;