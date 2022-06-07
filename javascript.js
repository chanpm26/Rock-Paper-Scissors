options = ["Fire", "Water", "Grass"]

function computerPlay() {
    output = options[Math.floor(Math.random() * options.length)];
    return(output)
}


function playRound(theplayerSelection, computerSelection) {

    if (theplayerSelection == "Fire" )  {
        if (computerSelection == "Fire") { 
            return("It is a tie!")
        } else if (computerSelection == "Grass") {
            return("You win! Fire beats Grass");
        } else (computerSelection == "Water") 
            return("You lose! Water beats Fire")
    } else if (theplayerSelection == "Water") {
        if (computerSelection == "Fire") { 
            return("You win! Water beats Fire")
        } else if (computerSelection == "Water") {
            return("It is a tie!");
        } else (computerSelection == "Grass") 
            return("You lose! Grass beats Water")
    } else (theplayerSelection == "Grass") 
        if (computerSelection == "Fire") { 
            return("You lose! Fire beats Grass")
        } else if (computerSelection == "Grass") {
            return("It is a tie!");
        } else (computerSelection == "Water") 
            return("You win! Grass beats Water")
    }

let playerScore = 0
let computerScore = 0

const scores = document.querySelector('#scores')

let playerScoreText = document.createTextNode(`Player Score = ${playerScore} `)
scores.appendChild(playerScoreText)
let space = document.createElement("p")
scores.appendChild(space)
let computerScoreText =  document.createTextNode(`Rival Score = ${computerScore} `)
scores.appendChild(computerScoreText)

const computerSelection = computerPlay()
const outputText = document.querySelector('#output')

const Fire = document.querySelector('#Fire')

 Fire.addEventListener('click', () => {
     const computerSelection = computerPlay();
     outputText.textContent = ((playRound("Fire", computerSelection)))
})

const Water = document.querySelector('#Water')

Water.addEventListener('click', () => {
    const computerSelection = computerPlay();
outputText.textContent = ((playRound("Water", computerSelection)))
})

const Grass = document.querySelector('#Grass')

Grass.addEventListener('click', () => {
    const computerSelection = computerPlay()
outputText.textContent = ((playRound("Grass", computerSelection)))
})
