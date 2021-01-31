/*
 * @lc app=leetcode.cn id=1470 lang=typescript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
  if (n === 0 || !nums || nums.length === 0) return [];
  let res: number[] = [];
  let left: number = 0;
  let right: number = n;
  while (left < n) {
    res.push(nums[left]);
    res.push(nums[right]);
    left++;
    right++;
  }
  return res;
}
// @lc code=end
