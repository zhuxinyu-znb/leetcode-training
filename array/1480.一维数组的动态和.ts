/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  if (!nums || nums.length === 0) return [];
  let res: number[] = [];
  let temp: number = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    temp += nums[i];
    res.push(temp);
  }
  return res;
}
// @lc code=end
