function computerPlay() {
    const computerChoice = ['rock', 'paper','scissors']
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'TIE!'
    } else if((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')){
        return 'PLAYER WINS!';
    } else if((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') || (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') || (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')){
        return 'COMPUTER WINS!';
    }
}

playerSelection = 'sciSSOrs'
const computerSelection = computerPlay()
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));