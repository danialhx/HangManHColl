// gameOver function
function gameOver() {
    console.log("Game has ended")
};

// let input = "a";
let stringOfArray = ["j","a","w","s"];

// function logic if stringArray contains input
let lives = 9;

function inputLogic(input) {
    let countRight=0;
    for (let i = 0; i < stringOfArray.length; i++) {
        if (stringOfArray[i] == input) {
            // console.log(`There is a letter ${input} is correct`)
            // invoke function to update front-end
            countRight++
            
            let correctWord= input;

        } else {
            // console.log(`The given letter ${input} is wrong`)
            //function to run deduction of health to run here
          
            // console.log (`Your lives is now ${lives}`);
        }
    }

    // if you do not have at least 1 right then you lose a life
    if(!(countRight>=1)){
        lives--;
    } 
    console.log (`Your lives is now ${lives}`);

    if(lives <= 0) {
        gameOver();
    }

}


// inputLogic("a");



// let lives = 9;


    // else if (stringOfArray[i] != input) {
    //     lives--;
    //     console.log (`Your lives is now ${lives}`)
    //     if (lives = 0 && lives < 0) gameOver();
    // }
