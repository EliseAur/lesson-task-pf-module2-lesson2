//Programming Foundations - Module 2
//Lesson Task 2 Questions

//Question 1
//Console log the 3rd item in this array.
//var winningNumbers = [1, 76, 2, 78, 16, 7];
var winningNumbers = [1, 76, 2, 78, 16, 7];

var thirdItem = winningNumbers[2];
console.log(thirdItem);

//or

console.log(winningNumbers[2]);

//Question 2
//Add a new item to this array using the `push` method and console log the new amount of items.
//var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

//Add a new item:
vegetables.push("carrot");

//Get the amount of items:
var itemCount = vegetables.length;

console.log(itemCount);

//Question 3
//Console log each item in this array using a for loop.
//var randomThings = ["pumpkin", false, 23, true, "tomato"];
var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (var i = 0; i < randomThings.length; i++) {
    //console.log(i);
    console.log(randomThings[i]);
    //var item = randomThings[i];
    //console.log(item);
}

//Question 4
//Loop through this array but only log the item if it is a number value.
//var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
    var typeOfItem = typeof moreThings[i];

    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }
}

//Question 5
//Order this array alphabetically and then loop through it and log each item.
//var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedList = ingredients.sort();

for (var i = 0; i < sortedList.length; i++) {
    console.log(sortedList[i]);
}

//Question 6
//Loop through this array and log every second item.
//var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {
    // use the % operator to get the remainder of i divided by 2
    // because we start at 0, every second number will have a remainder of 1

    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}
