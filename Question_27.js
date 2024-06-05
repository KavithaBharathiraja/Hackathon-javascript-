//WJSP for QuickSort:
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    // Choose a pivot element
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    
    // Partition the array into two sub-arrays
    const left = [];
    const right = [];
    const equal = [];
    
    arr.forEach(element => {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            equal.push(element);
        }
    });

    // Recursively sort the sub-arrays
    return quickSort(left).concat(equal, quickSort(right));
}

// Example usage
const array = [4, 2, 6, 8, 3, 5, 1, 7];
const sortedArray = quickSort(array);
console.log("Sorted array:", sortedArray);