/*Write a program to check palindrome (MalayalaM) 
*for both numbers and string?
*/
function isPalindrome(input) {
    // Convert input to string
    input = String(input);
    
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the alphanumericInput is equal to its reverse
    return alphanumericInput === alphanumericInput.split('').reverse().join('');
}

// Example usage with strings
console.log(isPalindrome("MalayalaM")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Example usage with numbers
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false