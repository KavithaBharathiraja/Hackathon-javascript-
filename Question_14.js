/*Given a string print the reverse
 *  of the words string.
*  (Input: Java Code Output: Code Java)
*/

function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');
    
    // Reverse the order of the words array
    words = words.reverse();
    
    // Join the words back into a string
    return words.join(' ');
}

// Example usage
const input = "Java Code";
const reversedWords = reverseWords(input);
console.log(reversedWords); // Output: "Code Java"
   