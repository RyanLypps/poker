
const Deck = require('./deck');
const Player = require('./player');
const Chips = require('./chips');


let TexasHoldEm = class {
    constructor() {
        this.deck = new Deck();

        // Shuffles the cards
        this.deck.shuffleCards();

        // Gets the players/Community and stores them
        this.players = [];
        this.boardCards = [];

        // Puts players in the same room
        this.players.push(new Player());
        this.players.push(new Player());

        // chips to each player
        this.chips = new Chips();
        this.players[0].getChips();
        this.players[1].getChips();

        // Gives Id each player unique
        this.players[0].playerId();

        // shuffles players
        this.shufflePlayers();

        // Allows first player to start
        this.allowsFirstPlayerToGo();

        // deals cards to players and board
        this.dealCards();
        this.dealToBoard();

        // rounds in TexasHoldEm
        this.round = 0;

        // Make player check buttons
        this.playerCheckButton1();
        this.playerCheckButton2();

        // disables player two's button
        this.playerTwosCheck();

    }

    dealCards() {
        for (let i = 0; i < 2; ++i) {
            this.players.forEach(e => {
                e.getCardFromDealer(this.deck.dealACard());
            })
        }
    }

    dealToBoard() {
        for (let i = 0; i < 3; i++) {
            this.boardCards.push(this.deck.dealACard());
        }
    }

    shufflePlayers() {
        for (let i = this.players.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.players[i], this.players[j]] = [this.players[j], this.players[i]];
        }
    }

    allowsFirstPlayerToGo() {
        this.players[0].isTurn = true;
    }

    playerTwosCheck() {
        let playerTwo = document.getElementById('player-two');
        playerTwo.setAttribute('disabled', '');
    }

    playerCheckButton1() {
        let button1 = document.createElement("button");
        button1.innerHTML = "Check";
        button1.setAttribute("id", "player-one");

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(button1);

        button1.addEventListener("click", () => {
            let playerTwo = document.getElementById('player-two');
            let playerOne = document.getElementById('player-one');
            if (this.players[0].isTurn === true) {
                this.players[0].isTurn = false;
                this.players[1].isTurn = true;
                playerOne.disabled = !playerOne.disabled;
                playerTwo.disabled = !playerOne.disabled;

                let check = this.players[0].chips[0] - 5;
                this.players[0].chips.push(check);
                this.players[0].chips.splice(0, 1);
                console.log(this.players[0].chips);
            }
        });
    }

    playerCheckButton2() {
        let button2 = document.createElement("button");
        button2.innerHTML = "Check";
        button2.setAttribute("id", "player-two");

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(button2);

        button2.addEventListener("click", () => {
            let playerOne = document.getElementById('player-one');
            let playerTwo = document.getElementById('player-two');
            if (this.players[1].isTurn === true) {
                this.players[0].isTurn = true;
                this.players[1].isTurn = false;
                playerTwo.disabled = !playerTwo.disabled;
                playerOne.disabled = !playerOne.disabled;

                let check = this.players[1].chips[0] - 5;
                this.players[1].chips.push(check);
                this.players[1].chips.splice(0, 1);
                console.log(this.players[1].chips);
            }
        });
    }

    playerCheck() {
        // let playerOne = document.getElementById('playerone');
        // if (this.players[0].isTurn === true) {
        //     // playerTwo.disabled = !playerTwo.disabled;
        //     playerOne.disabled = !playerOne.disabled;

        //     console.log('PlayerOne Turn')
        return console.log('work');
        // }
    }

    playerTurn() {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].isTurn == true) {

            }
        }
    }

    playTexasHoldEm() {
        while (this.round < 4) {

        }
    }

}

let texasHoldEm = new TexasHoldEm();
console.log(texasHoldEm);
