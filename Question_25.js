/*Write a program for binary search. 
 * And 5 i/p has to take from user 
 * as binary elements.
 */

// Function to perform binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Element found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Element not found
}

// Function to read binary elements from user
function readBinaryElements() {
    let binaryElements = [];
    for (let i = 0; i < 5; i++) {
        let element = parseInt(prompt("Enter a binary element (" + (i + 1) + "/5): "), 2);
        binaryElements.push(element);
    }
    return binaryElements;
}

// Example usage
const elements = readBinaryElements();
const target = parseInt(prompt("Enter the element to search: "), 2);

const index = binarySearch(elements, target);

if (index !== -1) {
    console.log("Element", target.toString(2), "found at index", index);
} else {
    console.log("Element", target.toString(2), "not found in the array.");
}