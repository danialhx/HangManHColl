// gameOver function
function gameOver() {
    console.log("Game has ended")
};

// let input = "a";
// let stringOfArray = ["h","a","n","g","m","a","n"];

// function logic if stringArray contains input
let lives = 9;

function inputLogic(input) {
    let countWrong=0;
    for (let i = 0; i < stringOfArray.length; i++) {
        if (stringOfArray[i] == input) {
            console.log(`There is a letter ${input} is correct`)
            // invoke function to update front-end
        } else {
            console.log(`The given letter ${input} is wrong`)
            //function to run deduction of health to run here
           countWrong++
            // console.log (`Your lives is now ${lives}`);
        }
    }

    if(countWrong>1){
        lives--;
        console.log (`Your lives is now ${lives}`); 
    }

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
