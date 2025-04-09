function subsets(nums: number[]): number[][] {
  const res = [];
  const subset = [];
  dfs(nums, 0, subset, res)
  return res
};

function dfs(nums, i, subset, res){
  console.log(i, subset)
  if(i>=nums.length){
      res.push([...subset])
      return
  }
  subset.push(nums[i])
  dfs(nums, i + 1, subset, res);
  subset.pop(nums[i]) 
  dfs(nums, i + 1, subset, res);
}


