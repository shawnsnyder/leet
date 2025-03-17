function search(nums: number[], target: number): number {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    return binary_search(0, nums.length - 1, nums, target);
};



function binary_search(l, r, nums, target) {
    if (l > r) return -1;
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) return m;
    return (nums[m] < target) ?
        binary_search(m + 1, r, nums, target) :
        binary_search(l, m - 1, nums, target);
}

//O(log n)
//O(log n)



//compare these two funcs...  while version
const findInArray = (arr: number[], target: number) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) return true
        if (target > arr[mid]) {
            low = mid + 1
        }
        if (target < arr[mid]) {
            high = mid - 1
        }
    }
    return false

}