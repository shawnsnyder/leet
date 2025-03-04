/**
 * This function calculates the amount of trapped rainwater using the Two Pointers algorithm.
 * The algorithm uses two pointers, one starting at the beginning and the other at the end of the array.
 * It moves the pointers towards each other, calculating the trapped water based on the minimum height
 * of the bars pointed by the two pointers. The pointer at the lower height is moved inward, ensuring
 * that all potential water trapping is considered.
 */

function trap(height: number[]): number {
    
  // Initialize two pointers, left and right, at the start and end of the array
  let left = 0;
  let right = height.length - 1;
  
  // Initialize variables to store the maximum height seen from the left and right
  let leftMax = 0;
  let rightMax = 0;
  
  // Initialize a variable to accumulate the total trapped water
  let totalWater = 0;
  
  // Loop until the two pointers meet
  while (left < right) {
      
      // If the height at the left pointer is less than the height at the right pointer
      if (height[left] < height[right]) {
          
          // If the current height is greater than the leftMax, update leftMax
          if (height[left] >= leftMax) {
              leftMax = height[left];
          } else {
              // Otherwise, calculate the trapped water at this position
              totalWater += leftMax - height[left];
          }
          
          // Move the left pointer to the right
          left++;
      } else {
          
          // If the current height is greater than the rightMax, update rightMax
          if (height[right] >= rightMax) {
              rightMax = height[right];
          } else {
              // Otherwise, calculate the trapped water at this position
              totalWater += rightMax - height[right];
          }
          
          // Move the right pointer to the left
          right--;
      }
  }
  
  // Return the total amount of trapped water
  return totalWater;
}
/*
Time Complexity
The time complexity of the given code is O(n), where n is the number of elements in the height array. 
This is because the algorithm uses a single while loop that iterates through the array with two pointers,
left and right, which traverse the array from both ends towards the center. Each element is processed 
at most once, resulting in a linear time complexity.

Space Complexity
The space complexity of the given code is O(1). The algorithm uses a constant amount of extra space, regardless of the input size. It only requires a few integer variables (left, right, leftMax, rightMax, and totalWater) to store the state of the computation, and no additional data structures are used that scale with the input size.
*/