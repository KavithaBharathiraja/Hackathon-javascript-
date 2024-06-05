/* Given a string print the reverse of the string.
 * (Input: Java Code Output: edoC avaJ)
 */

function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage
const input = "Java Code";
const reversed = reverseString(input);
console.log(reversed); // Output: "edoC avaJ"
