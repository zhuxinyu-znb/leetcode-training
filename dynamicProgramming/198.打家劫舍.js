/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    const len = nums.length;
    const tryRob = (index) => {
        let res = 0;
        if(index >= len) return 0;
        if(memo[index] !== -1) return memo[index];
        for(let i = index; i < len; i++) {
            res = Math.max(res, nums[i] + tryRob(i + 2))
        }
        memo[index] = res;
        return res;
    }
    let memo = new Array(len).fill(-1);
    return tryRob(0)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob1 = function(nums) {
    const len = nums.length;
    if(len == 0)
        return 0;
    const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    return dp[len];
};