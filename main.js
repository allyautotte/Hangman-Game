var inquirer = require("inquirer");
var Word = require("./Word.js");
var Letter = require("./Letter.js");
var citiesArray = require("./citiesArray.js");


var randomWord = citiesArray[Math.floor(Math.random()*citiesArray.length)];

var wordToGuess = randomWord;
var letterToGuess = "";
var displayedObj = new Word(wordToGuess, letterToGuess);
var wordLength = displayedObj.numLetters;
var wordDisplay = displayedObj.display;
var numGuessed = displayedObj.numGuessed;
var guessesLeft = displayedObj.guessesLeft;
var winOrLose = "";


console.log("Let's play Hangman: Cities Edition!");
console.log("You have 10 guesses. READY SET GO!");
console.log(wordDisplay);


function pickALetter() {
	inquirer.prompt([{
		type: "input",
		name: "letter",
		message: "What letter would you like to guess?"
	}]).then(function(answer) {
		letterToGuess = answer.letter;
		wordDisplay = displayedObj.checkWord(wordToGuess, letterToGuess, wordDisplay);
		console.log(wordDisplay);

		if(displayedObj.numGuessed === wordLength) {
			winOrLose = "won";
			gameOver();
			return;
		} else if (displayedObj.numGuessed === 0) {
			winOrLose = "lose";
			gameOver();
			return;
		}

		pickALetter();
	});
};

function gameOver() {
	console.log("GAME OVER!");

if (winOrLose === "won") {
	console.log("You WON!");
}   else if (winOrLose === "lose") {
	console.log("Sorry you lose. Try again!");
}
	return;
};

pickALetter();

