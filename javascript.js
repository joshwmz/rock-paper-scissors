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
        result.textContent = "Tie!";
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result.textContent = "You lose, paper beats rock!";
        return "lose";
    } else if (playerSelection == "rock" && computerSelection == "scissor") { 
        result.textContent = "You win, rock beats scissor!";
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result.textContent = "You win, paper beats rock!";
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        result.textContent = "You lose, scissor beats paper!";
        return "lose";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        result.textContent = "You lose, rock beats scissor!";
        return "lose";
    } else if (playerSelection == "scissor" && computerSelection == "paper") { 
        result.textContent = "You win, scissor beats paper!";
        return "win";
    }

}

// Declare variables for HTML elements
const buttons = document.querySelectorAll('button');
const choice = document.querySelector('#choice');
const result = document.querySelector('#result');
const score = document.querySelector('#score');

// Track wins / loses / ties of each round
let playerWins = 0;
let computerWins = 0;
let ties = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        let computerChoice = getComputerChoice();

        choice.textContent = `Player: ${e.target.id} | Computer: ${computerChoice}`;

        let output = playRound(e.target.id, computerChoice);

        // Count wins, loses and ties

        if (output == "win") {
            playerWins++;
        } else if (output == "lose") {
            computerWins++;
        } else if (output == "tie") {
            ties++;
        }

        score.textContent = `Player Score: ${playerWins} | Computer Score: ${computerWins}`;

        if (playerWins == 5) {
            alert('You won!');
            location.reload();
            return;
        } else if (computerWins == 5) {
            alert('You lose!');
            location.reload();
            return;
        }

    });
});