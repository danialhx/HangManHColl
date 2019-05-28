let jaws = {
    category: "Movie",
    word: "JAWS",
    hint: "Big ass shark"
}

let inception = {
    category: "Movie",
    word: "INCEPTION",
    hint: "Dream within a dream"
}

let interstellar = {
    category: "Movie",
    word: "INTERSTELLAR",
    hint: "Matthew McConaughey in space"
}

let zebra = {
    category: "Animal",
    word: "ZEBRA",
    hint: "Black and white"
}

let tiger = {
    category: "Animal",
    word: "TIGER",
    hint: "Covered in stripes"
}

let elephant = {
    category: "Animal",
    word: "ELEPHANT",
    hint: "Largest land mammal"
}

let basketball = {
    category: "Sport",
    word: "BASKETBALL",
    hint: "LeBron James plays this sport"
}

let football = {
    category: "Sport",
    word: "FOOTBALL",
    hint: "There are 11 players per team in this sport"
}

let tennis = {
    category: "Sport",
    word: "TENNIS",
    hint: "Roger Federer plays this sport"
}

let animal = [zebra, tiger, elephant]
let movie = [jaws, inception, interstellar]
let sport = [basketball, football, tennis]
let listOfWords = [animal, movie, sport]
// console.log(animal);
// console.log(movie);
// console.log(sport);
// console.log(listOfWords);

//Randomize the category
let selectedCategory = listOfWords[Math.floor(Math.random() * listOfWords.length)];
//console.log(selectedCategory);

//Randomly choose a word from the word library array above and store it in the string called selectedWord.
let selectedWord = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
//console.log(selectedWord);

console.log("Category : " + selectedWord.category);
console.log(selectedWord.word);
console.log("Hint : " + selectedWord.hint);

//Split the selected word into its individual letters and store it an the array called splitWord.
let splitWord = selectedWord.word.split("");
console.log(splitWord);

