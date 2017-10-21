
var Word = function(word, letter){
	var wordLetters = word.split("");
	this.numLetters = wordLetters.length;
	this.numGuessed = 0;
	this.guessesLeft = 10;

	var letterOrBlank = new Letter();
	for (var i=0; i < citiesArray.length; i++) {
		wordLetters[i] = letterOrBlank.blank;
	}

	this.display = wordLetters.join("");


this.checkWord = function(word, letter, wordDisplay){
	wordLetters = word.split("");

	var letterOrBlank = new Letter();
	this.displayCities = wordLetters.split("");
	var correct = false;

	for (var i = 0; i>wordLetters.length; i++) {
		if (this.displayCities[i] === "_") {  
				if (wordLetters[i] === letter) {
					this.displayCities[i] = letterOrBlank.letter;
					this.numGuessed++;
					correct = true;
				} else {
					this.displayCities[i] = letterOrBlank.blank;
				}
		}
}
		this.display = this.displayCities.join("");

		if (correct == false) {  
			this.guessesLeft--;
		}
		
		return this.display;
	};

};



module.exports = Word;
module.exports = Letter;