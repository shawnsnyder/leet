//top down DP 
function climbStairs(n: number): number {
    const memo = new Map<number, number>();

    const dfs = (i: number): number => {
        if (i > n) return 0;
        if (i === n) return 1;
        if (memo.has(i)) return memo.get(i)!;

        const ways = dfs(i + 1) + dfs(i + 2);
        memo.set(i, ways);
        return ways;
    };

    return dfs(0);
}
//O(n)
//O(n)


function climbStairs2(n) {
    if (n <= 2) {
        return n;
    }
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

//bottom up DP
//O(n)
//O(n)