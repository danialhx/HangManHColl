/* 
 Pick a random word.
 Take the player’s guess.
 Check that the player’s guess is a valid letter.
 Keep track of letters the player has guessed.
 Show the player their progress.
 Finish when the player has guessed the word.
*/

let limit = 9;
let wrongGuesses;



    let remainingGuesses = limit - wrongGuesses; 

    if ( expectedAnswer.indexOf( inputAnswer ) === -1 ) {
        console.log( "That letter in not in the secret word." );
        wrongGuesses += 1;
        return;
    }
