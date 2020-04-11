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
        this.potOfChips = [];

        // Value of bet for chips
        this.betValue = 0;

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

        // Makes select menu for values
        this.playerOneValueOptions();

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

    playerOneValueOptions() {
        let select = document.createElement("select");
        select.setAttribute("id", "values");
        select.onchange = () => {
            let selectOptions = document.getElementById('values').value;
            this.betValue = selectOptions;
        }

        let body = document.getElementsByTagName("body")[0];
        body.appendChild(select);

        let option = document.createElement("option");
        option.innerHTML = "Select a Value";

        let option1 = document.createElement("option");
        option1.value = 1;
        option1.innerHTML = "One";

        let option2 = document.createElement("option");
        option2.value = 2;
        option2.innerHTML = "Two";

        let option3 = document.createElement("option");
        option3.value = 3;
        option3.innerHTML = "Three";

        let option4 = document.createElement("option");
        option4.value = 5;
        option4.innerHTML = "Five";

        let option5 = document.createElement("option");
        option5.value = 10;
        option5.innerHTML = "Ten";

        let option6 = document.createElement("option");
        option6.value = 25;
        option6.innerHTML = "Twenty-Five";

        select.appendChild(option);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        select.appendChild(option6);

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

                let check = this.players[0].chips[0] - this.betValue;
                this.potOfChips.push(this.betValue);
                this.players[0].chips.push(check);
                this.players[0].chips.splice(0, 1);
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

                let check = this.players[1].chips[0] - this.betValue;
                this.potOfChips.push(this.betValue);
                this.players[1].chips.push(check);
                this.players[1].chips.splice(0, 1);
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
