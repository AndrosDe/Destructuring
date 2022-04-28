/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
    // old way
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

    // Destructuring:
let [john, mary, joe] = ages;

console.log(john, mary, joe);
console.log("");
// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
console.log("");
// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "spanish",
    forthLanguage: "german",
    fifthLanguage: "japanese",
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);
console.log("");
// Using rest parameter syntax

let fruits = ["apple",  "orange", "banana", "peach", "cherry"];
let [Favorite, secondFavorite, ...others] = fruits;
console.log(Favorite);
console.log(secondFavorite);
console.log(others);
console.log("");

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andreas: "raw meat",
};
let {brian, anna, ...rest} = favoriteFoods
console.log(brian);
console.log(anna);
console.log(rest);