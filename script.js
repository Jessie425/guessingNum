
//The words the function can choose from
var words = [
    "javascript",
    "ruby",
    "python"
];

//Generates a random word from our array
var word = words[Math.floor(Math.random() * words.length)];
//Creates a loop for our var i until it matches the length of the word length
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
// The var. shows how many letters are left after user guesses
var remainingLetters = word.length;


function checkLetters(character) {
    let guess = document.getElementById('word').value;
    let resultDisplay = document.getElementById('result');
    if (guess == null) {
        resultDisplay.innerHTML = "Try again. Insert a letter!";
    }
    else if (guess.length !== 1) {
        resultDisplay.innerHTML = "Insert a SINGLE letter please!";
    }
    else {
        for (var j = 0; j < word.length; j++);
        if (word[i] === guess) {
            answerArray[i] = guess;
            remainingLetters--;
        }


        //To let the player know which letters they guessed right and how many letters they still have left.
        while (remainingLetters > 0) {
            alert(answerArray.join());
        }
        //Show the answer and congratulate the player for guessing correctly

        alert(answerArray.join(""));
        alert("Good job. The answer was " + word);

    }
}
