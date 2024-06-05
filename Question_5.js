/*Given an array prints the unique numbers 
* and also print the number of occurrences 
* of duplicate numbers.
*/

function printUniqueAndCountDuplicates(arr) {
    // Create an object to store the count of occurrences for each number
    const countMap = {};
    
    // Count occurrences of each number
    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });
    
    // Print unique numbers and their counts
    console.log("Unique numbers:");
    Object.keys(countMap).forEach(key => {
        console.log(`${key}: ${countMap[key]} occurrence${countMap[key] > 1 ? 's' : ''}`);
    });
}

// Example usage
const numbers = [1, 2, 3, 2, 1, 5, 6, 3, 4, 4, 5, 5];
printUniqueAndCountDuplicates(numbers);
		