class Player {
    #name ="";
    constructor() {
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
}


  module.exports = Player;