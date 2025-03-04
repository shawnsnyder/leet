function longestConsecutive(nums: number[]): number {
  const numSet: Set<number> = new Set(nums);
  let maxLength: number = 0;
  for (const num of nums) {
      if (!numSet.has(num - 1)) {
          let currentNum: number = num;
          let currentLength: number = 1;

          // Count the length of the sequence by checking consecutive numbers in the set.
          while (numSet.has(currentNum + 1)) {
              currentNum += 1;
              currentLength += 1;
          }

          // Update the maximum length if the current sequence is longer.
          maxLength = Math.max(maxLength, currentLength);
      }
  }
  return maxLength;
};

/*
Time Complexity
The time complexity of the function is O(n), where n is the number of elements in the input array nums.

Creating a set from the input array takes O(n) time.
The main loop iterates over each element in the array, which is O(n).
Inside the loop, the while loop checks for consecutive numbers. Each number is checked at most twice (once as the start of a sequence and once as part of a sequence), resulting in an average time complexity of O(1) per element for this operation.
Thus, the overall time complexity is O(n).

Space Complexity
The space complexity of the function is O(n).

The space is primarily used by the numSet, which stores each element of the input array. In the worst case, all elements are unique, and the set will contain all n elements.
Therefore, the space complexity is O(n).
*/