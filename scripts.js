function computerPlay() {
    const computerChoice = ['rock', 'paper','scissors']
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return 'TIE'
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'PLAYER WINS';
    } else {
        return 'NO ONE WINS';
    }
}

playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));