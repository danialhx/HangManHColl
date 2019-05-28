// Allow an array to save all the right characters chosen made

//Accept input from user
// let input = "a"; // Sample input

// Initialize Array to store correct words
let correctArr = []

// Initialize Array to store wrong words
let wrongArr = []

//function to store wrong words in a globally accessible array 
// to be placed in the comparision logic that is run when word character is wrong


// Allow an array to save all the wrong characters chosen
function wrongChar (input) {
    wrongArr.unshift(`${input}`)
    console.log(`The letter ${input} has been added to wrongArr`) 
};


// wrongChar(input); // test whether code is working

// console.log(wrongArr); // Expected output = ['a']



