const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
const painting = document.querySelector('painter')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    showResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}
function showResult() {
    if (result === 'its a draw!') {
        painter.style.backgroundColor = 'rgb(110, 152, 230)'
        //painter.style.opacity = '0.3'
    }
    if (result === 'you win!') {
        painter.style.backgroundColor = 'rgb(101, 236, 97)'
    }
    if (result === 'you lose!') {
        painter.style.backgroundColor = 'rgb(247, 78, 56)'
    }
    showResult.innerHTML = painter
}