let wordList = [["JAWS", "INCEPTION", "INTERSTELLAR"], ["ZEBRA", "TIGER", "ELEPHANT"], ["BASKETBALL", "FOOTBALL", "TENNIS"]]; //Library of words
let animalList = wordList[0];
let movieList = wordList[1];
let sportsList = wordList[2];

//Randomize the category
let selectedCategory = wordList[Math.floor(Math.random() * wordList.length)];
//Randomly choose a word from the word library array above and store it in the string called selectedWord.
let selectedWord = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];

console.log(wordList);
//Checks and logs the category of the word
if (selectedCategory == wordList[0]) {
    console.log("Category : Movies");
}else if (selectedCategory == wordList[1]) {
    console.log("Category : Animals");
}else if (selectedCategory == wordList[2]) {
    console.log("Category : Sports")
}
console.log(selectedWord);
// console.log(animalList);
// console.log(movieList);
// console.log(sportsList);

let splitWord = selectedWord.split(""); //Split the selected word into its individual letters and store it an the array called splitWord.

console.log(splitWord);
