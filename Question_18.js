//WJSP to display duplicate character in string
function findDuplicateCharacters(str) {
    const charCount = {};
    const duplicates = [];

    // Count occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate over the charCount object and find duplicates
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

// Example usage
const inputString = "hello world";
const duplicateChars = findDuplicateCharacters(inputString);
console.log("Duplicate characters:", duplicateChars);
