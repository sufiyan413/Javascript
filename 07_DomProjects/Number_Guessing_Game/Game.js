// step 1

// gennerating random number from 1 to 100

// console.log(parseInt(Math.random()*100+1));

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#sbmt');
const userInput = document.querySelector('#guessField');
const guessAlert = document.querySelector('#guesses');
const remaining = document.querySelector('#lastResult');
const lowOrHigh = document.querySelector('#lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// needed 

let prevGuess = []   // for storing submitting value to showing user
let numGuess = 1     // for tracking attempts

let playGame = true   // allows to play game

//***************************************************************************

if (playGame) {                                     // if playgame is true then 
    submit.addEventListener('click', function (e) {      //listening events
        e.preventDefault()
        const guess = parseInt(userInput.value)        // get userinput value and holding in var
        console.log(guess);
        validateGuess(guess)                          // passing next function
    })
}

//***************************************************************************


function validateGuess(guess) {        // for checking validation value if value in bet 1 to 100

    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

//***************************************************************************

function checkGuess(guess) {    // checking values :- value equals to random num if equals then you are winner
    if (guess === randomNumber) {
        displayMessage('You guessed correct number')
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Number is too low')

    } else if (guess > randomNumber) {
        displayMessage('Number is too high')

    }
}

//***************************************************************************

function displayGuess(guess) {      //  clean values and all guesses updates
    userInput.value = ''        //clean and update values
    guessAlert.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

//***************************************************************************

function displayMessage(message) {   //  low or high message
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

//***************************************************************************




function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

//***************************************************************************

function newGame() {

    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click', function (e) {

        randomNumber = parseInt(Math.random() * 100 + 1);

        prevGuess = []
        numGuess = 1
        guessAlert.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true


    })
}




