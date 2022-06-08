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
   
    
const computerSelection = computerPlay()
const outputText = document.querySelector('#output')

const Fire = document.querySelector('#Fire')
Fire.addEventListener('click', () => {
     const computerSelection = computerPlay();
     let displayText = outputText.textContent = ((playRound("Fire", computerSelection)));
     totalScore(displayText)
})

const Water = document.querySelector('#Water')
Water.addEventListener('click', () => {
    const computerSelection = computerPlay();
    let displayText = outputText.textContent = ((playRound("Water", computerSelection)));
totalScore(displayText)
})

const Grass = document.querySelector('#Grass')
Grass.addEventListener('click', () => {
    const computerSelection = computerPlay()
let displayText = outputText.textContent = ((playRound("Grass", computerSelection)));
totalScore(displayText)
})

function totalScore(displayText) {
if (displayText.includes("tie")) {
    playerScore == playerScore;
    computerScore == computerScore;
} else if (displayText.includes("You win")) {
    playerScore == playerScore++;
    computerScore == computerScore;
} else if (displayText.includes("You lose")) {
    computerScore == computerScore++;
    playerScore == playerScore;
} else {
    console.log("debug")
}

playerScoreText.textContent = `Player Score = ${playerScore}`
computerScoreText.textContent = `Rival Score = ${computerScore} `

if (playerScore == 5 && computerScore != 5) {
  alert("Congrats, you reached 5 points first! You have passed your first test in being a Pokemon Master!");
  window.location.reload()
} else if (computerScore == 5 && playerScore != 5) {
    alert("Sorry, your rival reached 5 points first. Maybe you're not cut out to be a Pokemon Master?");
    window.location.reload()
}

}

let playerScore = 0
let computerScore = 0

const scores = document.querySelector('#scores')
let playerScoreText = document.createTextNode(`Player Score = ${playerScore}`)
scores.appendChild(playerScoreText)
let space = document.createElement("p")
scores.appendChild(space)
let computerScoreText =  document.createTextNode(`Rival Score = ${computerScore} `);
scores.appendChild(computerScoreText)