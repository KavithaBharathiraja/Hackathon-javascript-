/*Write a function to find out longest palindrome 
* in a given string?
*/

function longestPalindrome(s) {
    if (s.length === 0) {
        return "";
    }

    let longest = s[0];

    for (let i = 0; i < s.length; i++) {
        // Check odd-length palindromes with s[i] as center
        let palindromeOdd = expandAroundCenter(s, i, i);
        if (palindromeOdd.length > longest.length) {
            longest = palindromeOdd;
        }

        // Check even-length palindromes with s[i] and s[i+1] as center
        let palindromeEven = expandAroundCenter(s, i, i + 1);
        if (palindromeEven.length > longest.length) {
            longest = palindromeEven;
        }
    }

    return longest;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}

// Example usage
const inputString = "babad";
const longestPalindromicSubstring = longestPalindrome(inputString);
console.log("Longest palindromic substring:", longestPalindromicSubstring);
		