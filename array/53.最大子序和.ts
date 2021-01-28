/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const len = nums.length;
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > max) max = nums[i];
  }

  return max;
}
// @lc code=end
