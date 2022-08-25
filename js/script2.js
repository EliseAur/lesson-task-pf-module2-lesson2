// Programming Foundations - Module 2
// Lesson Task 2 Questions

// Question 1
// Console log the 3rd item in this array.

var winningNumbers = [1, 76, 2, 78, 16, 7];

thirdItem = winningNumbers[2];
console.log(thirdItem);

// Question 2
// Add a new item to this array using the push method and console log the new amount of items.

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("shoe");

//length = vegetables.length;
//console.log(length);

console.log(vegetables.length);

// Question 3
// Console log each item in this array using a for loop.
var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    var things = randomThings[i];
    console.log(things);
}

// Question 4
// Loop through this array but only log the item if it is a number value.

var moreThings = [14, "cat", true, 29, "fox", false, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i];
    //console.log(typeOfItem);

    if (typeOfItem === "boolean") {
        console.log("Boolean value:", moreThings[i]);
    }

    if (typeOfItem === "number") {
        console.log("Number value:", moreThings[i]);
    }

    if (typeOfItem === "string") {
        console.log("String value:", moreThings[i]);
    }
}

// Question 5
// Order this array alphabetically and then loop through it and log each item.

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedList = ingredients.sort();
console.log(sortedList);

for (var i = 0; i < sortedList.length; i++) {
    console.log(sortedList[i]);
}

// Question 6
// Loop through this array and log every second item.
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}
