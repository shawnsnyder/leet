function minCostClimbingStairs(cost: number[]): number {
    const memo = new Array(cost.length).fill(-1);

    function dfs(i) {
        console.log('start of ' ,i)
        if (i >= cost.length) {
            return 0 
        }
        if(memo[i] !== -1) {
            return memo[i]
        }
        memo[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2))
        console.log('memo i:', i, ' memo[',i,']', memo[i]);
        return memo[i]
    }

    return Math.min(dfs(0),dfs(1))
};