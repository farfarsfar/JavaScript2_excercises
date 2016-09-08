var firstArray = [4, 8, 15, 16, 23, 42];
var secondArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];

var combinedArray = [...firstArray, ...secondArray]

console.log(combinedArray)

console.log("Max value in combined array: ", Math.max(...combinedArray), "\nMin value in combined array: ", Math.min(...combinedArray))