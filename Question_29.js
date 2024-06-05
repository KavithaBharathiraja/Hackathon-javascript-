// WJSP to perform Merge sort using recursion 
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort the two halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two sorted arrays into a single sorted array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements of left and right arrays
    return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage
const array = [4, 2, 6, 8, 3, 5, 1, 7];
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);
