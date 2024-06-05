// Given an array of integers check the Palindrome of the series.
function isPalindrome(arr) {
    // Convert the array to a string for comparison
    const arrString = arr.join('');
    
    // Reverse the array and convert it to a string
    const reversedArrString = arr.slice().reverse().join('');
    
    // Check if the original array string is the same as the reversed array string
    return arrString === reversedArrString;
}

// Example usage
const integers1 = [1, 2, 3, 2, 1];
console.log("Is the array a palindrome?", isPalindrome(integers1)); // Output: true

const integers2 = [1, 2, 3, 4, 5];
console.log("Is the array a palindrome?", isPalindrome(integers2)); // Output: false