/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let lastNum: number = null;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (lastNum === nums[i]) {
        nums.splice(i, 1);
      } else lastNum = nums[i];
    }
    return nums.length;
  }
  // @lc code=end
  