function containsDuplicate(nums: number[]): boolean {
   /*
   nums.sort((a,b)=>a-b);
   for(let i=0;i<nums.length-1;i++){
    if(nums[i] === nums[i+1]){
        return true
    }
   } 
   return false
    */
   const numSet = new Set<number>();

   for (let i=0;i<nums.length;i++){
       if(numSet.has(nums[i])){
           return true
       }
       numSet.add(nums[i])
   }
  return false
}


/*
Time Complexity
The time complexity of the containsDuplicate function is O(n), where n is the number of elements in the input array nums. This is because:

Iterating through each element in the array takes O(n) time.
Checking if an element exists in the set and adding an element to the set both have an average time complexity of O(1).
Thus, the overall time complexity is O(n).

Space Complexity
The space complexity of the containsDuplicate function is O(n). This is because:

In the worst case, where there are no duplicates, all n elements from the array will be stored in the set.
Therefore, the space complexity is O(n).
*/