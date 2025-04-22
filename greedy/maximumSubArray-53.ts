function maxSubArray(nums: number[]): number {
    let maxSub = nums[0]
    let currSum = 0
    for (let n=0;n<nums.length;n++) {
         console.log('top of loop- ', 'n:', n, 'nums[n]:',nums[n], 'currSum:', currSum)
         if(currSum < 0){
             currSum=0
             console.log('currSum < 0, resetting')
         }
         currSum += nums[n]
         console.log('currSum:', currSum, 'maxSub:', maxSub,  'n:', n,  'nums[n]:', nums[n])
         maxSub = Math.max(currSum, maxSub)
         console.log('current max sub', maxSub)
    }
     return maxSub
 };