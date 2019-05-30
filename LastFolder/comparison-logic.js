// gameOver function
function gameOver() {
    console.log("Game has ended")
};

// let input = "a";
// let stringOfArray = ["j","a","w","s"];

// function logic if stringArray contains input
let lives = 9;
let correct= false ;

function inputLogic(input) {
    let countRight=0;
    for (let i = 0; i < stringOfArray.length; i++) {
        // console.log(input);
        console.log(stringOfArray[i])
        console.log(stringOfArray[i]===input)
        if (stringOfArray[i] == input) {
            // console.log(`There is a letter ${input} is correct`)
            // invoke function to update front-end
            countRight++
            
            correctWord= input;

        } else {
            // console.log(`The given letter ${input} is wrong`)
            //function to run deduction of health to run here
          
            // console.log (`Your lives is now ${lives}`);
        }
    }

    // if have at least one right then your guess is correct 
    if((countRight>=1)){
        correct=true;
    } else{
        correct=false;
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
