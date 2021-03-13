/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let record = [];
    for(let i = 0, len = nums.length; i < len; i++) {
        if(record.includes(nums[i])) {
            return true;
        }
        record.push(nums[i]);
        if(record.length === k + 1) {
            record.shift();
        }
    }
    return false;
};
// @lc code=end

