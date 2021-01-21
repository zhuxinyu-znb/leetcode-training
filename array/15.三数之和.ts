/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (!nums || nums.length < 3) {
    return [];
  }
  let list: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start: number = i + 1;
    let end: number = nums.length - 1;
    while (start < end) {
        if(nums[i] + nums[start] + nums[end] < 0) {
            start++
        } else if (nums[i] + nums[start] + nums[end] > 0) {
            end--
        } else if (nums[i] + nums[start] + nums[end] === 0) {
            list.push([nums[i], nums[start], nums[end]])
            while(nums[start] === nums[start + 1]) {
                start++;
            }
            start++;
            while(nums[end] === nums[end - 1]) {
                end--;
            }
            end--;
            continue;
        }
    }
  }
  return list;
}
// @lc code=end
