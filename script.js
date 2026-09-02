console.log("Hello, World!");
function playGame() {
    const choices = ["rock", "paper", "scissors"];
    return (choices[Math.floor(Math.random() * 3)]);
}
let humanScore = 0;
let computerScore = 0;
function playRound(userChoice) {
    if (humanScore === 5 || computerScore === 5) {
        results.textContent = "Game over! Final score - You: " + humanScore + " Computer: " + computerScore;
        return;
    }
    const computerChoice = playGame();
    if (userChoice === computerChoice) {
        results.textContent = "This round is a tie!";
    }
    else if ((userChoice === "paper" && computerChoice === "rock") || (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        results.textContent = "You win this round! " + userChoice + " beats " + computerChoice+"   " + "Your score: " + humanScore + "   " + "Computer score: " + computerScore;
    }
    else {
        computerScore++;
        results.textContent = "You lose this round! " + computerChoice + " beats " + userChoice+"   " + "Your score: " + humanScore + "   " + "Computer score: " + computerScore;
    }
}
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const results = document.getElementById("results");

rockButton.addEventListener("click", function() {
    playRound("rock"); 
    
});
paperButton.addEventListener("click", function() {
    playRound("paper");
})
scissorsButton.addEventListener("click", function() {
    playRound("scissors");
})
