/*WJP to merge two sorted array.
 *(Do not use third array)		
 *array1[10] = 1,2,4,6,9,10	
 *array2[4] =  3, 5,7,8, 
 *After merge :array1[10] = 1,2,3,4,5,6,7,8,9,10
 */

 function mergeSortedArrays(array1, m, array2, n) {
    let index1 = m - 1; // Index of last element in array1
    let index2 = n - 1; // Index of last element in array2
    let mergedIndex = m + n - 1; // Index of last position in merged array

    // Merge array2 into array1, starting from the end of both arrays
    while (index1 >= 0 && index2 >= 0) {
        if (array1[index1] > array2[index2]) {
            array1[mergedIndex--] = array1[index1--];
        } else {
            array1[mergedIndex--] = array2[index2--];
        }
    }

    // If there are remaining elements in array2, copy them to array1
    while (index2 >= 0) {
        array1[mergedIndex--] = array2[index2--];
    }
}

// Example usage
let array1 = [1, 2, 4, 6, 9, 10];
let array2 = [3, 5, 7, 8];
let m = array1.length;
let n = array2.length;

mergeSortedArrays(array1, m, array2, n);

console.log("Merged array1:", array1); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     