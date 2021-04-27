/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(!nums || nums.length === 0) return 0;
    const len = nums.length;
    if(len === 1) return nums[0]
    if(len === 2) {
        return Math.max(nums[0], nums[1]);
    }
    return Math.max(robTemp(nums, 0, len - 2), robTemp(nums, 1, len - 1))
};
function robTemp(nums, start, end) {
    let dp = new Array(end - start + 1).fill(0)
    dp[0] = nums[start];
    dp[1] = Math.max(nums[start], nums[start + 1])
    for(let i = 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[start + i], dp[i - 1])
    }
    return dp[end - start]
}