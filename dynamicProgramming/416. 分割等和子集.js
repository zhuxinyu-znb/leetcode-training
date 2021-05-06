/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    if(!nums || nums.length === 0) return false;
    let sum = nums.reduce((acc, cur) => acc + cur, 0)
    if(sum % 2 !== 0) return false
    let memo = new Array(nums.length).fill(-1).map((_) => new Array(sum).fill(-1))
    const tryPartition = (nums, index, sum) => {
        if(sum === 0) return true;
        if(sum < 0 || index < 0) return false;
        if(memo[index][sum] !== -1) return memo[index][sum]
        memo[index][sum] = tryPartition(nums, index - 1, sum) || tryPartition(nums, index - 1, sum - nums[index]) ? 1 : 0
        return memo[index][sum]
    }
    return tryPartition(nums, nums.length - 1, sum / 2)
};
