console.log("Hello, World!");
function playGame() {
    const choices = ["rock", "paper", "scissors"];
    return (choices[Math.floor(Math.random() * 3)]);
}
function getUserChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors:");
    return userChoice;
}
let humanScore = 0;
let computerScore = 0;
function playRound(userChoice, computerChoice) {
    userChoice = getUserChoice();
    computerChoice = playGame();
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log("You win! " + userChoice + " beats " + computerChoice+"   " + "Your score: " + humanScore + "   " + "Computer score: " + computerScore);
    }
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + userChoice+"   " + "Your score: " + humanScore + "   " + "Computer score: " + computerScore);
    }
}
for (let i = 0; i < 5; i++) {
    playRound();
    if (i == 4) {
        if (humanScore == computerScore) {
            console.log("It's a tie!");
        }
        else if (humanScore > computerScore) {
            console.log("You won");
        }
        else {
            console.log("You lost");
        }
    }
}