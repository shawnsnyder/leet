function isPalindrome(s: string): boolean {

    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanedString)
    // Initialize two pointers
    let leftPointer = 0;
    let rightPointer = cleanedString.length - 1;

    // Loop until the pointers meet
    while (leftPointer < rightPointer) {

        // Compare characters at both pointers
        if (cleanedString[leftPointer] !== cleanedString[rightPointer]) {
            return false; // Return false if characters do not match
        }

        // Move the pointers inward
        leftPointer++;
        rightPointer--;
    }

    // Return true if all characters matched
    return true;
}

/*
 * ### Time Complexity

The time complexity of the `isPalindrome` function is **O(n)**, where `n` is the length of the input string `s`. This complexity arises from the following operations:

1. **Cleaning the String**: The operation `s.toLowerCase().replace(/[^a-z0-9]/g, '')` iterates over the entire string to convert it to lowercase and remove non-alphanumeric characters. This operation takes O(n) time.

2. **Two Pointers Comparison**: The while loop iterates over the cleaned string, comparing characters from both ends towards the center. In the worst case, each character is checked once, resulting in O(n) time complexity.

Since both operations are O(n), the overall time complexity is O(n).

### Space Complexity

The space complexity of the `isPalindrome` function is **O(n)**. This is due to the following:

1. **Cleaning the String**: The operation `s.toLowerCase().replace(/[^a-z0-9]/g, '')` creates a new string `cleanedString` that can be as long as the input string `s` in the worst case. This requires O(n) additional space.

2. **Pointer Variables**: The space used by the two pointer variables (`leftPointer` and `rightPointer`) is constant, O(1).

Therefore, the overall space complexity is dominated by the space required for the cleaned string, resulting in O(n).
*/
