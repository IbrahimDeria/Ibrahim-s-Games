var canPlay = true;
var words = new Array(
  "WASHINGTON",
  "JAVASCRIPT",
  "PROGRAMMING",
  "COFFEE",
  "CASCADIA",
  "INTERNET",
  "SEATTLE",
  "REX WINKUS",
  "NEW YORK CITY",
  "NIGHTMARE",
  "LED ZEPPELIN",
  "BEATLES",
  "HAMBURGER",
  "SEAHAWKS",
  "JQUERY"
);

var toGuess = "";
var displayWord = "";
var usedLetters = "";
var wrongGuesses = 0;

var guessesRemaining = 0;

function selectLetter(c) {
  if (canPlay == false) {
    return;
  }

  if (usedLetters.indexOf(c) != -1) {
    return;
  }

  usedLetters += c;
  document.game.usedLetters.value = usedLetters;
  if (toGuess.indexOf(c) != -1) {
    // correct letter guess
    var position = 0;
    var tempMask = displayWord;

    while (toGuess.indexOf(c, position) != -1) {
      position = toGuess.indexOf(c, position);
      var end = position + 1;

      var startText = tempMask.substring(0, position);
      var endText = tempMask.substring(end, tempMask.length);

      tempMask = startText + c + endText;
      position = end;
    }

    displayWord = tempMask;
    document.game.displayWord.value = displayWord;

    if (displayWord.indexOf("*") == -1) {
      alert(
        "Well done, you have won!" +
          " Your answer was " +
          toGuess +
          ", which was right!"
      );
      canPlay = false;
    }
  } else {
    wrongGuesses += 1;

    guessesRemaining = 10 - wrongGuesses;
    eval('document.hm.src="hm' + wrongGuesses + '.gif"');
    document.game.wrongGuesses.value = wrongGuesses;
    document.game.remainingGuesses.value = guessesRemaining;
    if (wrongGuesses == 10) {
      alert("Sorry, you have lost! The word was: " + toGuess + ".");
      canPlay = false;
    }
  }
}

function reset() {
  selectWord();
  document.game.usedLetters.value = "";
  document.game.remainingGuesses.value = 10;
  document.game.wrongGuesses.value = 0;
  usedLetters = "";
  wrongGuesses = 0;
  document.hm.src;
}

function selectWord() {
  canPlay = true;
  var randomNumber = Math.round(Math.random() * (words.length - 1));
  toGuess = words[randomNumber];

  var maskedWord = createMask(toGuess);
  document.game.displayWord.value = maskedWord;
  displayWord = maskedWord;
}

function createMask(word) {
  var mask = "";
  var wordLength = word.length;

  for (i = 0; i < wordLength; i++) {
    mask += "*";
  }
  return mask;
}
