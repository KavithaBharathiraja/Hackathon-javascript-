//to find total number of integers,uppercase and lowercase character in the give string
//finding upper case:

function countUpperCase(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // Check if the character is uppercase
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            count++;
        }
    }
    return count;
}

// Example usage
const inputString = "Hello World";
const upperCaseCount = countUpperCase(inputString);
console.log("Total uppercase characters:", upperCaseCount);

