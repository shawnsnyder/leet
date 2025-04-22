function canJump(nums: number[]): boolean {
    let goalPost = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i--) {
        console.log('goalpost', goalPost, 'i', i, 'nums[i]', nums[i]);
        if (i + nums[i] >= goalPost) {
            goalPost = i
        }
    }
    return goalPost === 0
}