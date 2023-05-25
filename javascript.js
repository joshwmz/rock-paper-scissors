// Function to generate rock, paper or scissor with math random
function getComputerChoice() {

    let number = Math.random();

    if (number <= 1/3) {
        return "rock";
    } else if (number > 1/3 && number <=2/3) {
        return "paper";
    } else {
        return "scissor";
    }

}

// Function to play a single round of game, console logs the result and returns an output to count number of wins
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("Tie!");
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose, paper beats rock!");
        return "lose";
    } else if (playerSelection == "rock" && computerSelection == "scissor") { 
        console.log("You win, rock beats scissor!");
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win, paper beats rock!");
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("You lose, scissor beats paper!");
        return "lose";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("You lose, rock beats scissor!");
        return "lose";
    } else if (playerSelection == "scissor" && computerSelection == "paper") { 
        console.log("You win, scissor beats paper!");
        return "win";
    }

}

function game() {

    // Track wins / loses / ties of each round
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    // Play 5 rounds in one game
    for (let i = 0; i < 5; i++) {

        let playerSelection;
        
        while(true) {
            // Get player selection via prompt
            playerSelection = prompt("Rock, paper, or scissor?");

            // Quit function if player cancels prompt
            if (playerSelection == null) {
                console.log("You quit!");
                return;
            }

            // Make input case insensitive
            playerSelection = playerSelection.toLowerCase();

            // Check if input is valid
            let checkRock = playerSelection.localeCompare("rock");
            let checkPaper = playerSelection.localeCompare("paper");
            let checkScissor = playerSelection.localeCompare("scissor");
            
            if (checkRock == 0 || checkPaper == 0 || checkScissor == 0) {
                break;                    
            } else {
                console.log("Invalid input, try again");
            }
        }

        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection);

        // Count wins, loses and ties
        if (result == "win") {
            playerWins++;
        } else if (result == "lose") {
            computerWins++;
        } else if (result == "tie") {
            ties++;
        }

        // Stop game if player / computer wins 3 rounds
        if (i >= 2) {
            if (playerWins == 3) {
                console.log("You win!");
                return;
            } else if (computerWins == 3) {
                console.log("You lose!");
                return;
            }
        }

    }

    // Tally up scores to announce results
    if (playerWins > computerWins) {
        console.log("You win!");
    } else if (computerWins > playerWins) {
        console.log("You lose!");
    } else {
        console.log("Tie game, play again!");
    }

}

game();