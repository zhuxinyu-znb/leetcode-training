/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    if(Array.from(new Set(nums)).length === nums.length) return false
    return true
};
// @lc code=end

