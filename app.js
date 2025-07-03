const choices = ["snake", "water", "gun"];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
alert("Welcome to Snake Water Gun Game!");
let rules = alert("Rules of the game:\n1. Snake beats Water\n2. Water beats Gun\n3. Gun beats Snake\n4. If both players choose the same, it's a tie");
 let playerScore = 0;
 let computerScore = 0; 
 let playAgain = true;
while (playAgain) {
 let playerChoice = prompt("Enter your choice (snake, water, gun):").toLowerCase();
 if (!choices.includes(playerChoice)) {
     alert("Invalid choice. Please choose snake, water, or gun.");
 }
 if (choices.includes(playerChoice)) {
     const computer = computerChoice();
     alert(`Computer chose: ${computer}`);
     
     if (playerChoice === computer) {
         alert("It's a tie!");
     } else if (
         (playerChoice === "snake" && computer === "water") ||
         (playerChoice === "water" && computer === "gun") ||
         (playerChoice === "gun" && computer === "snake")
     ) {
         playerScore++;
         alert("You win this round!");
     } else {
         computerScore++;
         alert("Computer wins this round!");
     }
     
     alert(`Scores - Player: ${playerScore}, Computer: ${computerScore}`);
     window.confirm("Do you want to play again?") ? playAgain = true : playAgain = false;

 }}