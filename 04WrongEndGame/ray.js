
for (var k = 0; k < word.length; k++) {
    if (word[k] === inputAnswer) {
        expectedAnswer[k] = inputAnswer;
        remainingLetters--;
     }
}
