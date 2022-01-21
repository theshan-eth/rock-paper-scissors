let computerAnswer

function computerPlay() {
    const computerChoice = ['Rock', 'Paper','Scissors']
    computerAnswer = computerChoice[Math.floor(Math.random() * computerChoice.length)]
}

computerPlay()
console.log(computerAnswer)