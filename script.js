function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame() {
   
    let userChoice = prompt("Enter Rock, Paper, or Scissors:");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase(); // Capitalize input
   
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        console.log("Winner!");
    } else {
        console.log("You lose!");
    }
}

playGame();
