/*Write a method that will remove
		 * given character from the String:	
		 */
function removeCharacter(str, charToRemove) {
    // Create a regular expression to match the given character
    const regex = new RegExp(charToRemove, 'g');

    // Use the replace() method to remove all occurrences of the character
    return str.replace(regex, '');
}

// Example usage
const inputString = "Hello World";
const charToRemove = "l";
const result = removeCharacter(inputString, charToRemove);
console.log(result); // Output: "Heo Word"