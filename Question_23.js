//WJSP to differentiate input as string, int or bool:

function getType(input) {
    return typeof input;
}

// Example usage
console.log(getType("hello"));   // Output: "string"
console.log(getType(123));       // Output: "number"
console.log(getType(true));      // Output: "boolean"