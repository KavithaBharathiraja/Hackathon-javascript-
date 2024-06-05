
		/*Given an array of integers,
		 *sort the integer values.
		 */

         function sortIntegers(arr) {
            // Use the sort() method with a comparison function
            arr.sort(function(a, b) {
                return a - b; // Compare function to sort in ascending order
            });
            return arr;
        }
        
        // Example usage
        const integers = [5, 2, 9, 1, 3];
        const sortedIntegers = sortIntegers(integers);
        console.log("Sorted integers:", sortedIntegers);