function getComputerChoice() {
let randomNum = Math.random();
if (randomNum < .333333333) {
    return "ROCK";
} else if (randomNum < .66666666) {
    return "SCISSORS";
} else {return "PAPER";}
}

function getPlayerChoice() {
    let playerSelection;
    while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
        playerSelection = prompt("Select rock, paper, or scissors").toUpperCase();
        if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") alert("Invalid input");
    }
    return playerSelection;
}

function game_round (playerSelection, computerSelection){
    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            alert("Computer chose rock, This round is a tie");
            return "tie";
        } else if (computerSelection == "PAPER") {
            alert("Computer chose paper, You lose this round");
            return "loss";
        } else if (computerSelection == "SCISSORS") {
            alert("Computer chose scissors, You win this round");
            return "win";
        }
    }
    else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            alert("Computer chose rock, You win this round");
            return "win";
        }
        else if (computerSelection == "PAPER") {
            alert("Computer chose paper. This round is a tie");
            return "tie";
        }
        else if (computerSelection =="SCISSORS") {
            alert("Computer chose scissors, You lose this round");
            return "loss";
        }
    }
    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            alert("computer chose rock, You lose this round");
            return "loss";
        }
        else if (computerSelection == "PAPER") {
            alert("computer chose paper, you win this round");
            return "win";
        }
        else if (computerSelection == "SCISSORS") {
            alert("Computer chose scissors. This round is a tie")
            return "tie";
        }
    }
}

function game() {
    let computer_lives = 3;
    let player_lives = 3;

    while (computer_lives > 0 && player_lives > 0) {
         let round_result = "tbd";
         round_result = game_round(getPlayerChoice(),getComputerChoice());
         if (round_result === "win"){
            computer_lives--;
            alert(`Player lives left is: ${player_lives}, computer lives left is: ${computer_lives} `)
         }
         else if (round_result === "tie") {
            alert(`Player lives left is: ${player_lives}, computer lives left is: ${computer_lives} `)
         }
         else if (round_result === "loss") {
            player_lives--;
            alert(`Player lives left is: ${player_lives}, computer lives left is: ${computer_lives} `)
         }
    }

    if (player_lives == 0) {
        alert("You lose");
    } else if (computer_lives == 0) {
        alert("You win");
    }
}