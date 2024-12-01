class Player {
    #name ="";
    #budget;
    constructor() {
      this.#budget = 100;
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
    getBudget() {
        return this.#budget;
    }


}


  module.exports = Player;