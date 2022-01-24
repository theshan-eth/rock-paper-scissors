let playerScore = 0
let computerScore = 0

function computerPlay() {
    const computerChoice = ['rock', 'paper','scissors']
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'TIE!'
    } else if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')){
        playerScore ++;
        return 'PLAYER WINS!';
    } else if((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') || (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') || (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')){
        computerScore ++;
        return 'COMPUTER WINS!';
    }
}

for (let round = 0; round < 5; round++) {
    playerSelection = prompt('Please Enter Rock, Paper or Scissors')
    const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));
}

console.log(playerScore);
console.log(computerScore);

if (playerScore > computerScore) {
    console.log("Congratualtions you won!");
} else if (playerScore< computerScore) {
    console.log("Sorry you lost the game!");
} else {
    console.log("Sorry you tied the game!")
}