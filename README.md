# rock-paper-scissors

An Odin project to build a rock paper scissors game, I aim to put into practice the fundamental JavaScript concepts that I have learned and develop my problem solving approach and mindset.

Goal: Write a rock paper scissors program that will randomly generate either rock, paper or scissors upon user's input for 5 rounds to determine the winner

Plan:
1. Write a function 'computerSelection' that randomly generates either rock, paper or scissor

    Generate a random number
    - If number is less than 1/3, output rock
    - If number is greater than 1/3 but less than 2/3, output paper
    - If number is greater than 2/3 but less than 1, output scissor

2. Write another function that plays through one round of the game, taking 'playerSelection' and 'computerSelection' as input

    Use conditionals for the following:
    - If playerSelection = computerSelection, output "Tie!"
    - If playerSelection = rock and computerSelection = paper, output "You lose, paper beats rock!"
    - If playerSelection = rock and computerSelection = scissor, output "You win, rock beats scissor!"
    - If playerSelection = paper and computerSelection = rock, output "You win, paper beats rock!"
    - If playerSelection = paper and computerSelection = scissor, output "You lose, scissor beats paper!"
    - If playerSelection = scissor and computerSelection = rock, output "You lose, rock beats scissor!"
    - If playerSelection = scissor and computerSelection = paper, output "You win, scissor beats paper!"

3. Write yet another function that make it a 5-round game to determine the winner

    Use for loop to do the following:
    - Get prompt for player's selection
    - Quit the game if user cancels
    - Make player's input case insensitive
    - Check if user's input is valid
    - Count wins, loses and ties
    - If player or computer reaches 3 wins, stop game and announce winner
    
    Announce winner after 5 round of game