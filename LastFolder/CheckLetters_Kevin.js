let splitWord = ['j', 'a', 'w', 's']; //Assume its jaws first.
let lettersInput = []; //Empty array to store input of letters

function checkInputLetter(input) {
    for (let i = 0; i<splitWord.length; i++) {
        if (input == splitWord[i]) {
            lettersInput.splice(i, 0, input)
            return lettersInput;
        }
    }
}

console.log(checkInputLetter('a'));
console.log(checkInputLetter('j'));
console.log(checkInputLetter('s'));
console.log(checkInputLetter('w'));
console.log(lettersInput);
console.log(splitWord);

function checkAllLetters(lettersInput, splitWord) {
    if (lettersInput == splitWord) {
        console.log("You win!");
    }
}
console.log(checkAllLetters());