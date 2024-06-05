/*WJP to find total number of repeated integers, 
 * uppercase and lowercase character in the give string
 */
function countRepeatedCharacters(str) {
    const repeatedIntegers = {};
    const repeatedUppercase = {};
    const repeatedLowercase = {};

    // Count occurrences of each character in the string
    for (let char of str) {
        if (!isNaN(parseInt(char))) {
            repeatedIntegers[char] = (repeatedIntegers[char] || 0) + 1;
        } else if (char === char.toUpperCase()) {
            repeatedUppercase[char] = (repeatedUppercase[char] || 0) + 1;
        } else if (char === char.toLowerCase()) {
            repeatedLowercase[char] = (repeatedLowercase[char] || 0) + 1;
        }
    }

    return { repeatedIntegers, repeatedUppercase, repeatedLowercase };
}

// Example usage
const inputString = "Hello123 World!!";
const { repeatedIntegers, repeatedUppercase, repeatedLowercase } = countRepeatedCharacters(inputString);

console.log("Repeated integers:", repeatedIntegers);
console.log("Repeated uppercase characters:", repeatedUppercase);
console.log("Repeated lowercase characters:", repeatedLowercase);

		