
// === Beginner Exercises (1-10) ===

// Exercise 1: getFirstElement()
// Define a function that returns the first element of an array.
// Example: getFirstElement(['a', 'b', 'c']) returns 'a'
function getFirstElement(arr) {
  return arr[0]
}
console.log('Exercise 1 Result:', getFirstElement(['a', 'b', 'c']));

// Exercise 2: getArrayLength()
// Define a function that returns the length of an array.
// Example: getArrayLength([1, 2, 3, 4]) returns 4
function getArrayLength(arr) {
  return arr.length;
}
console.log('Exercise 2 Result:', getArrayLength([1, 2, 3, 4]));

// Exercise 3: addToEnd()
// Define a function that adds a number to the end of an array and returns the array.
// Example: addToEnd([1, 2], 3) returns [1, 2, 3]


// input [3]
// output [1, 2, 3]
function addToEnd(arr, num) {
  arr.push(num);
  return arr;
}
console.log('Exercise 3 Result:', addToEnd([1, 2], 3));

// Exercise 4: isArrayEmpty()
// Define a function that returns true if an array is empty, false otherwise.
// Example: isArrayEmpty([]) returns true
function isArrayEmpty(arr) {
  // if statement that returns true if array is empty 
  // if(arr.length === 0){
  //   return true;
  // }else{
  //   return false;
  // }
  return arr.length === 0;
}
console.log('Exercise 4 Result:', isArrayEmpty([]));

// Exercise 5: greetFirst()
// Define a function that takes an array of names and returns a greeting for the first name.
// Example: greetFirst(['Alice', 'Bob']) returns 'Hello, Alice!'


// input: array of names
// output: Hello 'First name'
function greetFirst(names) {
  return `Hello, ${names[0]}` 
}
console.log('Exercise 5 Result:', greetFirst(['Alice', 'Bob']));

// // Exercise 6: sumFirstTwo()
// // Define a function that returns the sum of the first two elements of a number array.
// // Example: sumFirstTwo([5, 10, 15]) returns 15
// function sumFirstTwo(numbers) {
// }
// console.log('Exercise 6 Result:', sumFirstTwo([5, 10, 15]));

// // Exercise 7: containsValue()
// // Define a function that checks if an array contains a specific value using includes().
// // Example: containsValue(['cat', 'dog'], 'dog') returns true
// function containsValue(arr, value) {
// }
// console.log('Exercise 7 Result:', containsValue(['cat', 'dog'], 'dog'));

// // Exercise 8: joinNames()
// // Define a function that joins an array of names with ', ' and returns the string.
// // Example: joinNames(['Sam', 'Alex']) returns 'Sam, Alex'
// function joinNames(names) {
// }
// console.log('Exercise 8 Result:', joinNames(['Sam', 'Alex']));

// // Exercise 9: getLastIndex()
// // Define a function that returns the index of the last element in an array.
// // Example: getLastIndex(['a', 'b', 'c']) returns 2
// function getLastIndex(arr) {
// }
// console.log('Exercise 9 Result:', getLastIndex(['a', 'b', 'c']));

// // Exercise 10: removeFirst()
// // Define a function that removes the first element of an array and returns the array.
// // Example: removeFirst([1, 2, 3]) returns [2, 3]
// function removeFirst(arr) {
// }
// console.log('Exercise 10 Result:', removeFirst([1, 2, 3]));

// // === Intermediate Exercises (11-20) ===

// // Exercise 11: doubleNumbers()
// // Define a function that doubles each number in an array using forEach() and returns the new array.
// // Example: doubleNumbers([1, 2, 3]) returns [2, 4, 6]
// function doubleNumbers(numbers) {
// }
// console.log('Exercise 11 Result:', doubleNumbers([1, 2, 3]));

// // Exercise 12: filterShortWords()
// // Define a function that filters words shorter than 4 characters from an array.
// // Example: filterShortWords(['cat', 'tiger', 'dog']) returns ['tiger']
// function filterShortWords(words) {
// }
// console.log('Exercise 12 Result:', filterShortWords(['cat', 'tiger', 'dog']));

// // Exercise 13: addPrefix()
// // Define a function that adds a prefix to each string in an array and returns the new array.
// // Example: addPrefix(['dog', 'cat'], 'pet-') returns ['pet-dog', 'pet-cat']
// function addPrefix(arr, prefix) {
// }
// console.log('Exercise 13 Result:', addPrefix(['dog', 'cat'], 'pet-'));

// // Exercise 14: countEvens()
// // Define a function that counts even numbers in an array using a for...of loop.
// // Example: countEvens([1, 2, 3, 4]) returns 2
// function countEvens(numbers) {
// }
// console.log('Exercise 14 Result:', countEvens([1, 2, 3, 4]));

// // Exercise 15: reverseArray()
// // Define a function that reverses an array without modifying the original.
// // Example: reverseArray([1, 2, 3]) returns [3, 2, 1]
// function reverseArray(arr) {
// }
// console.log('Exercise 15 Result:', reverseArray([1, 2, 3]));

// // Exercise 16: findIndex()
// // Define a function that finds the index of a value in an array, or -1 if not found.
// // Example: findIndex(['a', 'b', 'c'], 'b') returns 1
// function findIndex(arr, value) {
// }
// console.log('Exercise 16 Result:', findIndex(['a', 'b', 'c'], 'b'));

// // Exercise 17: capitalizeNames()
// // Define a function that capitalizes the first letter of each name in an array.
// // Example: capitalizeNames(['alice', 'bob']) returns ['Alice', 'Bob']
// function capitalizeNames(names) {
// }
// console.log('Exercise 17 Result:', capitalizeNames(['alice', 'bob']));

// // Exercise 18: sumGreaterThan()
// // Define a function that sums numbers in an array greater than a given threshold.
// // Example: sumGreaterThan([1, 5, 10], 3) returns 15
// function sumGreaterThan(numbers, threshold) {
// }
// console.log('Exercise 18 Result:', sumGreaterThan([1, 5, 10], 3));

// // Exercise 19: sliceMiddle()
// // Define a function that returns a slice of an array from index 1 to the second-to-last element.
// // Example: sliceMiddle([1, 2, 3, 4, 5]) returns [2, 3, 4]
// function sliceMiddle(arr) {
// }
// console.log('Exercise 19 Result:', sliceMiddle([1, 2, 3, 4, 5]));

// // Exercise 20: replaceValue()
// // Define a function that replaces all occurrences of a value in an array with a new value.
// // Example: replaceValue(['a', 'b', 'a'], 'a', 'x') returns ['x', 'b', 'x']
// function replaceValue(arr, oldValue, newValue) {
// }
// console.log('Exercise 20 Result:', replaceValue(['a', 'b', 'a'], 'a', 'x'));

// // === Advanced Exercises (21-30) ===

// // Exercise 21: filterNested()
// // Define a function that filters numbers > 5 from a nested array.
// // Example: filterNested([[1, 6], [7, 2]]) returns [6, 7]
// function filterNested(nestedArr) {
// }
// console.log('Exercise 21 Result:', filterNested([[1, 6], [7, 2]]));

// // Exercise 22: flattenArray()
// // Define a function that flattens a nested array into a single array.
// // Example: flattenArray([[1, 2], [3, 4]]) returns [1, 2, 3, 4]
// function flattenArray(nestedArr) {
// }
// console.log('Exercise 22 Result:', flattenArray([[1, 2], [3, 4]]));

// // Exercise 23: countOccurrences()
// // Define a function that counts how many times a value appears in an array.
// // Example: countOccurrences(['a', 'b', 'a'], 'a') returns 2
// function countOccurrences(arr, value) {
// }
// console.log('Exercise 23 Result:', countOccurrences(['a', 'b', 'a'], 'a'));

// // Exercise 24: uniqueValues()
// // Define a function that returns an array of unique values from an input array.
// // Example: uniqueValues([1, 2, 2, 3]) returns [1, 2, 3]
// function uniqueValues(arr) {
// }
// console.log('Exercise 24 Result:', uniqueValues([1, 2, 2, 3]));

// // Exercise 25: splitByThreshold()
// // Define a function that splits an array into two arrays: numbers <= threshold and > threshold.
// // Example: splitByThreshold([1, 5, 10], 5) returns [[1, 5], [10]]
// function splitByThreshold(numbers, threshold) {
// }
// console.log('Exercise 25 Result:', splitByThreshold([1, 5, 10], 5));

// // Exercise 26: buggySumArray()
// // Debug: Should sum all numbers in an array, but returns incorrect result.
// // Example: buggySumArray([1, 2, 3]) should return 6
// function buggySumArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i <= numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log('Exercise 26 Result:', buggySumArray([1, 2, 3]));

// // Exercise 27: buggyFilterOdds()
// // Debug: Should filter odd numbers, but includes evens.
// // Example: buggyFilterOdds([1, 2, 3, 4]) should return [1, 3]
// function buggyFilterOdds(numbers) {
//   const odds = [];
//   numbers.forEach((num) => {
//     if (num % 2 === 0) {
//       odds.push(num);
//     }
//   });
//   return odds;
// }
// console.log('Exercise 27 Result:', buggyFilterOdds([1, 2, 3, 4]));

// // Exercise 28: buggyJoinWords()
// // Debug: Should join words with ' | ', but joins with commas.
// // Example: buggyJoinWords(['cat', 'dog']) should return 'cat | dog'
// function buggyJoinWords(words) {
//   return words.join();
// }
// console.log('Exercise 28 Result:', buggyJoinWords(['cat', 'dog']));

// // Exercise 29: nestedAverage()
// // Define a function that calculates the average of all numbers in a nested array.
// // Example: nestedAverage([[1, 2], [3, 4]]) returns 2.5
// function nestedAverage(nestedArr) {
// }
// console.log('Exercise 29 Result:', nestedAverage([[1, 2], [3, 4]]));

// // Exercise 30: matrixSumRows()
// // Define a function that returns an array of sums for each row in a nested array.
// // Example: matrixSumRows([[1, 2], [3, 4]]) returns [3, 7]
// function matrixSumRows(matrix) {
// }
// console.log('Exercise 30 Result:', matrixSumRows([[1, 2], [3, 4]]));