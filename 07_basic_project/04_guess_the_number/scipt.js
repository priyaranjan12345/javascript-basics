let randNum = parseInt(Math.round(Math.random() * 100 + 1))

const submit = document.querySelector('#submitButton')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const stratOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess > 100) {
        alert("Please enter a number between 100")
    } else if (guess < 0) {
        alert("Please enter a number greater than 0")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage("Game Over. Number is " + randNum)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randNum) {
        displayMessage("You won the game")
        endGame()
    } else if (guess < randNum) {
        displayMessage("Number is too low")
    } else if (guess > randNum) {
        displayMessage("Number is too heigh")
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(msg) {
    lowOrHigh.innerHTML = `<h1>${msg}</h1>`
}



function endGame() { 
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button class="btn info" id="newGane"> Start new Game </button>`
    stratOver.appendChild(p)
    playGame = false
    newGame()
 }

 function newGame() {
    const newGameButton = document.querySelector("#newGane")
    newGameButton.addEventListener('click', ()=>{
        randNum = parseInt(Math.round(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        stratOver.removeChild(p)
        lowOrHigh.innerHTML = ''
        playGame = true

    })

 }