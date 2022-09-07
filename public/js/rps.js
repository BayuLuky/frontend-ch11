const card = document.querySelectorAll(".card");
const versusTitle = document.querySelector(".title-status");
const statusSection = document.querySelector(".center-side-status");
const statusCard = document.querySelector(".card-status");
const statusTitle = document.querySelector(".card-status h2");
const resetButton = document.getElementById("btn_reset");
const playerChoose = document.querySelectorAll(".contentImage .player");

class Gameplay {
    result;
    card;
    #round = 0;

    constructor(player, comp) {
        this.player = player;
        this.comp = comp;

        this.result = null;
        this.card = card;
    }

    resultProcess(playChoice, compChoice) {
        switch (playChoice.choice + "-" + compChoice.choice) {
            case "rock-scissors":
            case "scissors-paper":
            case "paper-rock":
                this.result = "win";
                this.showResult("win");
                break;
            case "rock-paper":
            case "scissors-rock":
            case "paper-scissors":
                this.result = "lose";
                this.showResult("lose");
                break;
            case "rock-rock":
            case "scissors-scissors":
            case "paper-paper":
                this.result = "draw";
                this.showResult("draw");
                break;
            default:
                break;
        }
    }

    playerChoice(playChoice) {
        switch (playChoice.choice) {
            case "rock":
                this.changeCard(0);
                break;
            case "paper":
                this.changeCard(1);
                break;
            case "scissors":
                this.changeCard(2);
                break;
            default:
                break;
        }
    }

    computerChoice(compChoice) {
        switch (compChoice.choice) {
            case "rock":
                this.changeCard(3);
                break;
            case "paper":
                this.changeCard(4);
                break;
            case "scissors":
                this.changeCard(5);
                break;
            default:
                break;
        }
    }

    changeCard(n) {
        card[n].classList.add("clicked");
    }

    showResult(gameResult) {
        versusTitle.classList.add("hide-status");
        statusSection.classList.remove("hide-status");
        if (gameResult == "win") {
            statusTitle.innerHTML = `PLAYER 1 <br> WIN`;
        } else if (gameResult == "lose") {
            statusTitle.innerHTML = `COM <br> WIN`;
        } else {
            statusCard.classList.add("bg-draw");
            statusTitle.classList.add("pd-20");
            statusTitle.innerHTML = "DRAW";
        }
    }

    startGame(player, comp) {
        comp.getRandomChoice();
        this.resultProcess(player, comp);
        this.playerChoice(player);
        this.computerChoice(comp);

        player.resultChoice();
        comp.resultChoice();
        this.#round++;
    }

    resetGame() {
        card.forEach((n) => n.classList.remove("clicked"));
        versusTitle.classList.remove("hide-status");
        statusSection.classList.add("hide-status");
        statusCard.classList.remove("bg-draw");
        statusTitle.classList.remove("pd-20");
        this.result = null;
    }
}

class User {
    constructor() {
        this.choice = null;
    }

    resultChoice() {
        console.log("Choice -> " + this.choice);
    }
}

class Player extends User {
    constructor() {
        super();
    }

    resultChoice() {
        console.log("Player choice -> " + this.choice);
    }

    setPlayerChoice(choice) {
        this.choice = choice;
    }
}

class Computer extends User {
    constructor() {
        super();
    }

    resultChoice() {
        console.log("Computer choice -> " + this.choice);
    }

    getRandomChoice() {
        const comChoice = ["rock", "paper", "scissors"];
        const comRand = Math.round(Math.random() * 2);
        this.choice = comChoice[comRand];
    }
}

const player1 = new Player();
const cpu = new Computer();
const game = new Gameplay(player1, cpu);

playerChoose.forEach((player) => {
    player.addEventListener("click", () => {
        if (!game.result) {
            const playerChoice = player.id;
            player1.setPlayerChoice(playerChoice);
            game.startGame(player1, cpu);
        } else alert("Please reset the game first.");
    });
});

resetButton.addEventListener("click", () => game.resetGame());
