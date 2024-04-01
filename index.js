// Credit to ChatGPT for assistance and code comments.
'use strict';

// Function to remove duplicate values from an array
function removeDuplicates(array) {
    // Convert the array to a Set, which automatically removes duplicates
    const uniqueSet = new Set(array);
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
    // Return the resulting array with duplicates removed
    return uniqueArray;
}

// Function to merge arrays together into one
function mergeArrays(...arrays) {
    // Concatenate all arrays together using the spread operator
    // This will merge all arrays into one single array
    return [].concat(...arrays);
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = mergeArrays(array1, array2, array3);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Export modules
module.exports = { removeDuplicates, mergeArrays };