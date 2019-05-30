/* 
Pick a random word.
Take the player’s guess.
Check that the player’s guess is a valid letter.
Keep track of letters the player has guessed.
Show the player their progress.
Finish when the player has guessed the word.
*/


function reduceLives(){
    if (stringOfArray[i] != input) {
        lives--;
        console.log (`Your lives is now ${lives}`)
        if (lives = 0 && lives < 0) gameOver();
    }
    
}



