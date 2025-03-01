function twoSum(nums: number[], target: number): number[] {
    const numToIndex: Map<number, number> = new Map();
    for(let i = 0; i < nums.length; i++) {
        numToIndex.set(nums[i], i) 
    }

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(numToIndex.has(complement) && numToIndex.get(complement) !== i){
            return [i, numToIndex.get(complement)]
        }
    }
    return []; 
}
