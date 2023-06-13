import { DICTIONARY } from "./dictionary.js";

/* Global Constants*/
const NUMBER_OF_GUESSES = 7

/* Global Variables: */
let guessesRemaining = NUMBER_OF_GUESSES
const currentGuess = []
let nextLetter = 0
// Generates a random word from the dictionary and designates it as the answer word
const answerWord = DICTIONARY[Math.floor(Math.random() * DICTIONARY.length)]


