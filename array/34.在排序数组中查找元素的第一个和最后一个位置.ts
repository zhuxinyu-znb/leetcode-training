/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  if (!nums || nums.length === 0) return [-1, -1];
  let start: number = 0;
  let end: number = nums.length - 1;
  let left = -1;
  let right = -1;
  while (start <= end) {
    let mid: number = start + ((end - start) >> 1);
    if (target === nums[mid]) {
      left = mid - 1;
      right = mid + 1;
      while (nums[left] === target) {
        left--;
      }
      left++;
      while (nums[right] === target) {
        right++;
      }
      right--;
      return [left, right];
    }
    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [-1, -1];
}
// @lc code=end
