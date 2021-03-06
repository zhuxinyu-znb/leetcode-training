/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let p: number = 2;
  for (let i = 2, len = nums.length; i < len; i++) {
    if (nums[i] !== nums[p - 2]) {
      nums[p] = nums[i];
      p++;
    }
  }
  return p;
}
// @lc code=end
