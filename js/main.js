import { DICTIONARY } from "./dictionary.js";

/* Global Constants*/
const NUMBER_OF_GUESSES = 7

/* Global Variables: */
let guessesRemaining = NUMBER_OF_GUESSES
const currentGuess = []
let nextLetter = 0
// Generates a random word from the dictionary and designates it as the answer word
const answerWord = DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)]


function initBoard() {
  const board = document.getElementById('game-board')
  // console.log(board) // Output: <div id="game-board"> </div>

  // Creating 7 rows (vertically) with divs
  for (let i=0; i<NUMBER_OF_GUESSES; i++) {
    const row = document.createElement('div')
    // console.log("ROW", row) // Output: <div></div>
    // Adding a class name to the created divs above
    row.className = 'letter-row'

    for (let j=0; j<5; j++) {
      // Creating 5 boxes (with divs) for our letters
      const box = document.createElement('div')
      // Adding a class name of letter box to each individual box
      box.className = 'letter-box'
      // Adding our box(es) to our row
      row.appendChild(box)
    }
    // Adding our row to our game-board
    board.appendChild(row)
  }
}









initBoard()