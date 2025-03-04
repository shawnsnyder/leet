function threeSum(nums: number[]): number[][] {

  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {

      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {

          const sum = nums[i] + nums[left] + nums[right];

          if (sum === 0) {
              result.push([
                  nums[i], nums[left], nums[right]
              ]);


              while (left < right && nums[left] === nums[left + 1]) left++;
              left++;

              // Move the right pointer to the left, skipping duplicates
              while (left < right && nums[right] === nums[right - 1]) right--;
              right--;
          } else if (sum < 0) {
              left++;
          }
          // If the sum is greater than zero, move the right pointer to decrease the sum
          else {
              right--;
          }
      }
  }
  return result;
}

/*
Time Complexity
The time complexity of the threeSum function is O(n^2).

Sorting the array: The array is sorted initially, which takes O(n log n) time.
Iterating through the array: The main loop iterates through the array, and for each element, the two pointers technique is applied, which takes O(n) time in the worst case.
Overall: The sorting step is dominated by the two nested loops, resulting in an overall time complexity of O(n^2).

Space Complexity
The space complexity of the threeSum function is O(1), excluding the space required for the output.

In-place operations: The algorithm primarily uses in-place operations and a constant amount of extra space.
Result storage: The space used to store the result is not considered in the space complexity analysis, as it depends on the number of triplets found.
*/