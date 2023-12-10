let resultContainer = document.querySelector(".result-container");
let rock = document.querySelector("#rock");
let scissors = document.querySelector("#scissors");
let paper = document.querySelector("#paper");
let reset = document.querySelector('.reset-btn');
let playerSelection;
let computer_lives = 3;
let player_lives = 3;

// Player selects rock, paper or scissors
// Game round function is triggered
//    embez de return win en game round, modifica el valor de vidas
//    game function detecta cuando cantidad de vidas llega a zero
//    dentro del game function nulifica los botones despues de que un jugador pierde, considera reset button


paper.addEventListener("click",() => {
    if(player_lives > 0 && computer_lives > 0) {
        game_round("PAPER",getComputerChoice());
        game();
    }
})

rock.addEventListener("click", () => {
    if(player_lives > 0 && computer_lives > 0) {
        game_round("ROCK",getComputerChoice());
        game()
    }
})

scissors.addEventListener("click", () => {
    if(player_lives > 0 && computer_lives > 0) {
        game_round("SCISSORS",getComputerChoice());
        game();
    }
})

reset.addEventListener("click", ()=> {
    resultContainer.replaceChildren();
    player_lives=3;
    computer_lives=3;
    updateLives();
})
//resultContainer.replaceChildren() to remove


function resultAppend(string) {
    let result = document.createElement("p");
    result.textContent = string;
    resultContainer.appendChild(result);
}

function updateLives() {
    document.querySelector('#player-lives').textContent = `Player lives left is: ${player_lives}`;
    document.querySelector('#COM-lives').textContent = `COM lives left is: ${computer_lives}`;
}

function getComputerChoice() {
let randomNum = Math.random();
if (randomNum < .333333333) {
    return "ROCK";
} else if (randomNum < .66666666) {
    return "SCISSORS";
} else {return "PAPER";}
}

//function getPlayerChoice() {
  //  let playerSelection;
    //while (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
      //  playerSelection = prompt("Select rock, paper, or scissors").toUpperCase();
        //if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS") alert("Invalid input");
    //}
    //return playerSelection;
//}

function game_round (playerSelection, computerSelection){
    resultContainer.replaceChildren();
    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            resultAppend("Computer chose rock, This round is a tie");
            updateLives();
        } else if (computerSelection == "PAPER") {
            resultAppend("Computer chose paper, You lose this round");
            player_lives = player_lives -1;
            updateLives();
        } else if (computerSelection == "SCISSORS") {
            resultAppend("Computer chose scissors, You win this round");
            computer_lives=computer_lives-1;
            updateLives();
        }
    }
    else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            resultAppend("Computer chose rock, You win this round");
            computer_lives=computer_lives-1;
            updateLives();
        }
        else if (computerSelection == "PAPER") {
            resultAppend("Computer chose paper. This round is a tie");
            updateLives();
        }
        else if (computerSelection =="SCISSORS") {
            resultAppend("Computer chose scissors, You lose this round");
            player_lives=player_lives-1;
            updateLives();
        }
    }
    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "ROCK") {
            resultAppend("computer chose rock, You lose this round");
            player_lives = player_lives-1;
            updateLives();
        }
        else if (computerSelection == "PAPER") {
            resultAppend("computer chose paper, you win this round");
            computer_lives = computer_lives-1;
            updateLives();
        }
        else if (computerSelection == "SCISSORS") {
            resultAppend("Computer chose scissors. This round is a tie")
            updateLives();
        }
    }
    resultAppend("New round, select rock, paper or scissors");
}

function game() {

    if (player_lives == 0) {
        resultContainer.replaceChildren();
        resultAppend('You lose :(');
    } else if (computer_lives == 0) {
        resultContainer.replaceChildren();
        resultAppend('You win');
    }
}

updateLives();