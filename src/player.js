module.exports = class Player {
    constructor() {
        this.hand = new Array();
        this.id = 0;
        this.isTurn = false;
        this.chips = [];
    }

    showCards() {
		return this.hand;
    }
    
    getCardFromDealer(card) {
		this.hand.push(card);
    }
    
    playerId() {
        return this.id++;
    }

    getChips() {
      this.chips.push(100);
      return this.chips;
    }
}