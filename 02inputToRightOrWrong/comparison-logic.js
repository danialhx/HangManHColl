
// let input = "a";
// let stringOfArray = ["h","a","n","g","m","a","n"];

// function logic if stringArray contains input

function inputLogic(input) {

    for (let i = 0; i < stringOfArray.length; i++) {
        if (stringOfArray[i] == input) {
            console.log(`There is a letter ${input} is correct`)
            // invoke function to update front-end
        } else {
            console.log(`The given letter ${input} is wrong`)
            //function to run deduction of health to run here
        }
    }

}


// inputLogic("a");