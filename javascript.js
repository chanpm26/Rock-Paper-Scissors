options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    output = options[Math.floor(Math.random() * options.length)];
    return(output)
}


function oneRoundOfPlay(theplayerSelection, computerSelection) {

    if (theplayerSelection == "ROCK" )  {
        if (computerSelection == "Rock") { 
            return("It is a tie")
        } else if (computerSelection == "Scissors") {
            return("You win! Rock beats scissors");
        } else (computerSelection == "Paper") 
            return("You lose! Paper beats rock")
    } else if (theplayerSelection == "SCISSORS") {
        if (computerSelection == "Rock") { 
            return("You lose! Rock beats scissors")
        } else if (computerSelection == "Scissors") {
            return("It is a tie!");
        } else (computerSelection == "Paper") 
            return("You win! Scissors beats paper")
    } else if (theplayerSelection == "PAPER") {
        if (computerSelection == "Rock") { 
            return("You win! Paper beats rock")
        } else if (computerSelection == "Paper") {
            return("It is a tie!");
        } else (computerSelection == "Scissors") 
            return("You lose! Scissors beats paper")
    } else (theplayerSelection !== "Rock" || theplayerSelection !== "Scissors" || theplayerSelection !== "Paper") 
        return("That's not an option!")
    }


const computerSelection = computerPlay()
const outputText = document.querySelector('#output')

const Rock = document.querySelector('#Rock')
 Rock.addEventListener('click', () => {
    const computerSelection = computerPlay();
outputText.textContent = (oneRoundOfPlay("ROCK", computerSelection))})

const Scissors = document.querySelector('#Scissors')
Scissors.addEventListener('click', () => {
    const computerSelection = computerPlay()
outputText.textContent = ((oneRoundOfPlay("SCISSORS", computerSelection)))
})

const Paper = document.querySelector('#Paper')
Paper.addEventListener('click', () => {
    const computerSelection = computerPlay()
outputText.textContent = ((oneRoundOfPlay("PAPER", computerSelection)))
})

function game () {
}

game()