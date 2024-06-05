/*Write a program which inputs a 
*positive natural number N and prints 
 *the possible consecutive number combinations, 
 *which when added give N.INPUT:  N = 9  	
 *OUTPUT:  4 + 5, 2 + 3+ 4
 */ 

 function findConsecutiveSums(N) {
    let result = [];

    // Iterate from 1 to N/2 (inclusive)
    for (let i = 1; i <= Math.floor(N / 2); i++) {
        let sum = i;
        let consecutiveNumbers = [i];

        // Start from i+1 and keep adding consecutive numbers until the sum is less than or equal to N
        for (let j = i + 1; sum <= N; j++) {
            sum += j;
            consecutiveNumbers.push(j);

            // If sum is equal to N, add the combination to the result array
            if (sum === N) {
                result.push(consecutiveNumbers.slice()); // Use slice to create a copy of consecutiveNumbers array
                break;
            }
        }
    }

    return result;
}

// Example usage
const N = 9;
const combinations = findConsecutiveSums(N);

console.log("Possible consecutive number combinations for N =", N + ":");
combinations.forEach(combination => {
    console.log(combination.join(" + "));
});