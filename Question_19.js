//WJSP to display number of occurrence of all character

function countCharacters(str) {
    const charCount = {};

    // Count occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Display the count of each character
    for (let char in charCount) {
        console.log(`${char}: ${charCount[char]}`);
    }
}

// Example usage
const inputString = "hello world";
countCharacters(inputString);