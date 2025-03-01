function twoSum(numbers: number[], target: number): number[] {

    // Initialize two pointers: left at the start, right at the end of the array
    let left = 0;
    let right = numbers.length - 1;

    // Loop until the two pointers meet
    while (left < right) {

        // Calculate the sum of the elements at the two pointers
        const currentSum = numbers[left] + numbers[right];

        // If the sum matches the target, return the 1-based indices
        if (currentSum === target) {
            return [left + 1, right + 1];
        }

        // If the sum is less than the target, move the left pointer to the right
        if (currentSum < target) {
            left++;
        } else {
            // If the sum is greater than the target, move the right pointer to the left
            right--;
        }
    }

    // Return an empty array if no solution is found (though the problem guarantees a solution)
    return [];
}
/*
### Time Complexity

The time complexity of the given code is **O(n)**, where *n* is the number of elements in the input array `numbers`. This is because each element in the array is processed at most once by either the left or right pointer. The while loop continues until the two pointers meet, and in each iteration, at least one of the pointers is moved closer to the other, ensuring that the loop runs in linear time relative to the size of the array.

### Space Complexity

The space complexity of the given code is **O(1)**. This is because the algorithm uses a constant amount of extra space regardless of the input size. The only additional space used is for a few integer variables (`left`, `right`, and `currentSum`), which do not depend on the size of the input array. The output array `[left + 1, right + 1]` is also of constant size.
