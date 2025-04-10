function subsets(nums: number[]): number[][] {
    let res = []
    let subset = []
    dfs(nums, 0, subset, res)
    return res

    function dfs(nums, i, subset, res){
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        dfs(nums, i + 1, subset, res);
        subset.pop();
        dfs(nums, i + 1, subset, res);
    }
};


